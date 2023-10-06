import { AxiosRequestConfig } from "axios";


const CORSPROXY = "https://cors-anywhere.herokuapp.com" // append before base url to access a cors resource

const BASEURL = "https://baconipsum.com/api/?type=meat-and-filler";

 const sampleConfig: AxiosRequestConfig = {
  method: "GET",
  url: BASEURL.toString(),
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
};
export default sampleConfig