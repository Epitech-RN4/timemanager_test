import axios from "axios"
import { errorHandler } from "../utils/functions/errorHandler";

const instance = axios.create({
    baseURL:"http://localhost:4000/api",
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
    }
})

instance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("accessToken");
        
        if (accessToken) {config.headers.Authorization = `Bearer ${accessToken}`};
      return config;
    },
    (error) => Promise.reject(error)
  );

interface IRequest {
    endpoint:string,
    data?: Body | null,
}

const createRequest = (method:"get" | "post" | "put" | "delete") => {
    return async ({endpoint, data=null}:IRequest)=>{
        try {            
            const response = await instance({method, url:endpoint, data})            
            return response.data
        } catch (error) {
            errorHandler(error)
        }
    }
}

export const api = {
    get:createRequest("get"),
    post:createRequest("post"),
    put:createRequest("put"),
    delete:createRequest("delete")
}
