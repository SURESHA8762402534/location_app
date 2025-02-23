import axios from "axios";

export const API_KEY: string = "4a0097e3710740dab9d396cb21f8054b";

export const http = axios.create({
  baseURL: `https://api.opencagedata.com/geocode/v1/json`
});