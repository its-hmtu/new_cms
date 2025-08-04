import axiosClient from "./axiosClient"

export const getDataApi = async (url = '', params = {}) => {
  const {data, status} = await axiosClient.get(url, {params})

  if (status !== 200) {
    throw new Error(`Error fetching data: ${status}`);
  }

  return data;
}

export const postDataApi = async (url = '', body = {}) => {
  const response = await axiosClient.post(url, body);
  console.log(response.data);
  // if (response?.status !== 200 && response?.status !== 201) {
  //   throw new Error(`Error posting data: ${response?.status}`);
  // }
  return response.data;
}