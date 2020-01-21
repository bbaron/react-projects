import axios from "axios";

const KEY = "AIzaSyAkROGX7Xi9LIY7LAxpI-0U_Sn7wMCwF7k";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
