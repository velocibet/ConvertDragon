// server/utils/discord.ts
export const sendDiscordMessage = async (content: object) => {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) return;

  try {
    await $fetch(webhookUrl, {
      method: 'POST',
      body: content
    });
  } catch (err) {
    console.error('디스코드 전송 실패:', err);
  }
};