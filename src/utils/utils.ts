import axios, {AxiosResponse} from "axios";
import {ApiResponse} from "../interfaces";

const reader = new FileReader();

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
  },
  async convertImageToBase64(file: File) : Promise<any> {
    reader.readAsDataURL(file)
    reader.onload = () => Promise.resolve(reader.result);

    reader.onerror = (error) => {
      return Promise.reject(error)
    }
  }
};

export default utils;
