import axios from "axios";
import {API_BASE_URL} from "./config.js";
const api = axios.create({
  baseURL: API_BASE_URL,
});
export const registerUser= async(userInfo)=>{
  const response=await api.post("/api/auth/register", userInfo);
 
  // localStorage.setItem("user", JSON.stringify(response.data.user));
  return response.data;
}
export const loginUser= async(userInfo)=>{
 const response = await api.post("/api/auth/login",userInfo);
 localStorage.setItem("user", JSON.stringify(response.data.user));
 return response.data
}