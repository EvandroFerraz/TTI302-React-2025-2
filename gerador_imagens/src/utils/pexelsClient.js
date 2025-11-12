import axios from "axios"
import env from "react-dotenv"

// axios.create() = cria um novo cliente de conexão
export default axios.create({
    baseURL: "https://api.pexels.com/v1",
    headers: {
        Authorization: env.PEXELS_KEY
    }
})