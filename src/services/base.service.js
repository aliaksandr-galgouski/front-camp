export class ApiService {
  async get(url, options) {
    try {
      //throw new Error();
      let response = await fetch(url, options);
      
      return await response.json();
    } catch (err) {
      console.error(err); 
      return {};     
    }
  }
}

export class RequestOptions {
  constructor(){
    this.headers = { };
  }

  setHeader(headerName,headerValue){
    this.headers[headerName] = headerValue;
  }
}