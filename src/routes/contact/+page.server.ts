
export const actions = {
    default: async ({ request }) => {

        const data = await request.formData();
        const mail = data.get("mail");
        console.log(mail)

        await fetch (
            "https://discord.com/api/webhooks/1410131814957453392/DZWwTncoAHwMc5tk1iiWEkaaxg6u11lVxv4wiDqi4goxRY24pCSJ4gQi2OxzVAQQ6WlV",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ content: mail })
            }
        );

    }
};
