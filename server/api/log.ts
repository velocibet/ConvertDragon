import { sendDiscordMessage } from "../utils/discord"
import { useSupabaseAdmin } from "../utils/supabase"

// server/api/log.post.ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const supabase = useSupabaseAdmin()

  const clientIp = event.node.req.headers['x-forwarded-for'] || 
                   event.node.req.socket.remoteAddress
  
  const userAgent = event.node.req.headers['user-agent']

  const { data, error } = await supabase
    .from('conversion_logs')
    .insert([
      { 
        from_format: body.from, 
        to_format: body.to,
        user_agent: userAgent,
        ip: Array.isArray(clientIp) ? clientIp[0] : clientIp
      }
    ])
  
  const embedMessage = {
    embeds: [{
      title: "변환 로그",
      color: 0x00ff00,
      fields: [
        { name: "📥 원본", value: body.from, inline: true },
        { name: "📤 결과", value: body.to, inline: true },
        { name: "📍 IP", value: Array.isArray(clientIp) ? clientIp[0] : clientIp },
        { name: "📱 기기 정보 (User-Agent)", value: userAgent, inline: false }
      ],
      footer: { text: `시간: ${new Date().toLocaleString('ko-KR')}` }
    }]
  };

  sendDiscordMessage(embedMessage);

  if (error) {
    console.error('DB 저장 실패:', error.message)
    throw createError({
      statusCode: 500,
      statusMessage: '로그를 저장하는데 실패했습니다.'
    })
  }

  return { success: true, message: '기록을 완료했습니다.' }
})