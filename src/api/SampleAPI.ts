import { AxiosRequestConfig } from "axios";

const BASEURL = "https://cat-fact.herokuapp.com/facts/";

const sampleConfig = (): AxiosRequestConfig => {
  return {
    method: "GET",
    url: BASEURL.toString(),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
};

export default sampleConfig;