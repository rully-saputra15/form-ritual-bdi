import axios, {AxiosResponse} from "axios";
import {ApiResponse} from "../interfaces";

const utils = {
  async apiHandler<T>(
    request: Promise<AxiosResponse<ApiResponse<T>>>
  ): Promise<ApiResponse<T>> {
    try {
      return (await request).data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return Promise.reject(error.response?.data);
      }
      throw new Error(error as any);
    }
  }
};

export default utils;
