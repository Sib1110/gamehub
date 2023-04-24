import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7aa073d23e814d0386431232d8f654d7",
  },
});
