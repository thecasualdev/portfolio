
import { DISCORD_WEBHOOK_URL } from "$env/static/private"

export const actions = {
    default: async ({ request }) => {

        const data = await request.formData();
        const name = data.get("name")
        const mail = data.get("mail")


        const message = data.get("message")

        const payload = {
            embeds: [
                {
                    color: 10134510,
                    fields: [
                        {
                           name: "Name:",
                           value: `\`\`\`${name}\`\`\`` ,
                           inline: true
                        },
                        {
                           name: "Email:",
                           value: `||\`\`\`${mail}\`\`\`||`,
                           inline: true
                        },
                        {
                            name: "Message:",
                            value: `\`\`\`${message}\`\`\``
                        }
                    ]
                }
            ]
        }

        await fetch (
            DISCORD_WEBHOOK_URL,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            }
        );

    }
};
