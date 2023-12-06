import apiClient from "~/utility/axioconfig";
import IUser from "../../type/auth.type";

const handleLoginApi = async ({email,password}: IUser) => {
  const response = await apiClient.post<IUser[]>("/auth/login/",{email,password});
  if (response) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
}


const authService = {
  handleLoginApi
}

export default authService;