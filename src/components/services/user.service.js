import axios from "axios";

const baseApiUrl = "http://localhost:4000/v1";


export const createUser = async (payload) => {
  const createUserEndpoint = `${baseApiUrl}/user`;


  const { data: apiResponse } = await axios.post(createUserEndpoint, payload);

  return apiResponse;
};


























































