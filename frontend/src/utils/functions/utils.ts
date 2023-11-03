export const getURL = (endpoint:string) => {
    return import.meta.env.VITE_BASE_URL + endpoint;
}

export const getEndpoint = (route:{pathname:string}) => {
    return route.pathname.split("/").pop();
}

export const generateKey = (label:string) => {
    return label.split(" ").join("_");
}

export function errorHandler(error:any){
    const {status, statusText, data} = error.response;
    if (status) {
        console.error(`${status} - ${statusText} : ${data.error}`);
    } else console.error("An error has occured trying to fetch the API", error)
}