import {useFetch} from "nuxt/app";
import axios from "axios";
export default defineEventHandler(async (e) => {
    const body = await readBody(e)
    // console.log(await fetchCat())
    try {
        await sendDiscordWebhookMessage(`
sender: ${body.sender}
email: ${body.email}\n
message:\n${body.message}
        `)
        await sendEmail("Automated Mail", body.email, "Thank you for reaching out to me =^_^=", "I will get back to you as soon as I can. Here's a cute cat pic though ( ^ - ^ )")
    }catch (error) {
        return {
            status: 500,
            message: error
        }
    }

    // let data = await $fetch(body.url+"")
    // console.log(data)
    return {
        status: 200
    }

})


async function sendDiscordWebhookMessage(message) {
    const data = {
        content: message, // The message to be sent
        username: "Webhook Bot", // The username to display (optional)
        avatar_url: "https://i.imgur.com/4M34hi2.png" // The avatar URL to display (optional)
    };

    try {
        const response = await axios.post("https://discord.com/api/webhooks/1280557822509191201/vxcEnQmgDuq-eaE8RiwZrreWTKAFnZISMmv5cSb7pCux-CvyMmVYOXbkhSgWJ2fj8J_0", data, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log('Message sent successfully:', response.data);
    } catch (error) {
        console.error('Error sending message:', error);
    }
}
async function fetchCat() {
    try {
        // Make the request to the API
        const response = await axios.get('https://api.thecatapi.com/v1/images/search');

        const data = response.data;

        // Assuming we want to return the first image from the array
        return data[0].url;
    } catch (error) {
        // Handle errors (e.g., network issues, API errors)
        console.error('Error fetching cat image:', error);
        throw error; // Re-throw the error if needed
    }
}


async function sendEmail(name, email, subject, message) {
    const imageUrl = await fetchCat();
    const htmlContent = `
        <html>
        <body>
            <img src="${imageUrl}" alt="Cute Cat" style="width:100%;max-width:600px;" />
        </body>
        </html>
    `;



    const data = JSON.stringify({
        "Messages": [{
            "From": {"Email": "Sheaksadi123456@gmail.com", "Name": "Automated Mail - sadi.dev"},
            "To": [{"Email": email, "Name": name}],
            "Subject": subject,
            "TextPart": message,
            "HTMLPart": htmlContent
        }]
    });

    const config = {
        method: 'post',
        url: 'https://api.mailjet.com/v3.1/send',
        data: data,
        headers: {'Content-Type': 'application/json'},
        auth: {username: '0adba42260a8e3816a0f4ac2501194a4', password: '4b313b831b8ef7ed7f8979eae8c3adc8'},
    };

    return axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            throw error
        });

}