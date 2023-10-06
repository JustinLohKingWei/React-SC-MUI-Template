import { AxiosRequestConfig } from "axios";

const CORSPROXY = "https://cors-anywhere.herokuapp.com"; // append before base url to access a cors resource

const BASEURL = "https://baconipsum.com/api/?type=meat-and-filler";

const samplePostConfig: AxiosRequestConfig = {
  method: "POST",
  url: BASEURL.toString(),
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  data: {
    key1: "value1",
    key2: "value2",
  },
};
export default samplePostConfig;
