import axios from "axios";

export default axios.create({ baseURL: "https://api.giphy.com/v1/stickers", params: { api_key: "tLRL34Wf7iCmY5K1L5kCZ3R6Fi8ZYQ3y" } });
// export default axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });
// https://jsonplaceholder.typicode.com/posts