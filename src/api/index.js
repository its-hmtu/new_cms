import axiosClient from "./axiosClient";
import _ from "lodash";

export const getDataApi = async (url = "", params = {}) => {
  try {
    const data = await axiosClient.get(url, params);
    return data;
  } catch (error) {
    console.log(`get api: ${url} error = ${error}`);
    return error;
  }
};

export const postDataApi = async (url = "", body = {}) => {
  try {
    const response = await axiosClient.post(url, body);
    return response;
  } catch (error) {
    console.log(`post api: ${url} error = ${error}`);
    return error;
  }
};

export const putDataApi = async (url = "", body = {}) => {
  try {
    const response = await axiosClient.put(url, body);
    return response;
  } catch (error) {
    console.log(`put api: ${url} error = ${error}`);
    return error;
  }
};

export const deleteDataApi = async (url = "", body = {}) => {
  try {
    const response = _.isEmpty(body)
      ? await axiosClient.delete(url)
      : await axiosClient.delete(url, body);

    return response;
  } catch (error) {
    console.error(`delete api: ${url} error =`, error);
    return error;
  }
};
