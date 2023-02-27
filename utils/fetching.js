import axios from "axios";

export default async function fetching (item) {
    const res = await axios(`http://localhost:7000/${item}`)
    return res.data
}