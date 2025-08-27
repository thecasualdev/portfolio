
import { DISCORD_WEBHOOK_URL } from "$env/static/private"

export const actions = {
    default: async ({ request }) => {

        const data = await request.formData();
        const mail = data.get("mail");
        console.log(mail)

        await fetch (
            DISCORD_WEBHOOK_URL,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ content: mail })
            }
        );

    }
};
