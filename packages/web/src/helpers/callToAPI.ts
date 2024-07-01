import axios from "axios";

type MethodsType = "GET" | "POST" | "DELETE";

interface ICallToAPI {
  method: MethodsType;
  url: string;
  params: Record<string, string>;
}

export const callToAPI = async (data: ICallToAPI) => {
  return axios({
    method: data.method.toLowerCase(),
    url: data.url,
    data: {
      ...data.params,
    },
  });
};
