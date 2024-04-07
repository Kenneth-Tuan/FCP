import axios from "axios";

import { useUserStore } from "@/stores/user";
import { responseErrorHandler } from "@/utils/axios/utils";

const baseURL = import.meta.env.VITE_FCP_API_BASE_URL;

export const apiHelper = axios.create({
  baseURL,
});

apiHelper.interceptors.request.use(
  function (config) {
    const userStore = useUserStore();
    const { getToken } = userStore;

    const token = getToken();
    config.headers.Authorization = `Bearer ${token}`;
    config.headers["gls-connection-id"] = glsConnectionId.value;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

apiHelper.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    return responseErrorHandler(error);
  }
);

export const apiHelper_auth = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API_BASE_URL,
});
