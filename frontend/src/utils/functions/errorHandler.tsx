export function errorHandler(error){
    const {status, statusText, data} = error.response;
    console.error(`${status} - ${statusText} : ${data.error}`);
    
}