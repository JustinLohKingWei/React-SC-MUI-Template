import { AxiosRequestConfig } from "axios";


const CORSLPROXY = "https://cors-anywhere.herokuapp.com"

const BASEURL = "http://loripsum.net/api/10/short/headers";

 const sampleConfig: AxiosRequestConfig = {
  method: "GET",
  url: CORSLPROXY.toString+"/"+BASEURL.toString(),
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
};
export default sampleConfig