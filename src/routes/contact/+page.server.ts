
export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const mail = data.get("mail");
        console.log(mail)
    }
};
