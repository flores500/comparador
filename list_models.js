// Native fetch used
import dotenv from 'dotenv';
dotenv.config();

async function check() {
    console.log("Key starting with:", process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.substring(0, 5) : "UNDEFINED");
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.models) {
            console.log("Disponible models:", data.models.map(m => m.name).join(", "));
        } else {
            console.log("Error or no models:", data);
        }
    } catch (e) {
        console.error(e);
    }
}
check();
