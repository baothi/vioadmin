import apiClient from "~/utility/axioconfig";
import IUser from "../../type/auth.type";

const handleLoginApi = async (user: IUser) => {
  console.log("========================================")
  console.log(user)
  console.log("========================================")
  const response = await apiClient.post<IUser[]>("/auth/login/",user);
  if (response) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
}


const authService = {
  handleLoginApi
}

export default authService;