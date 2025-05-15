import axios from './axios.customize';

const createUserAPI = async (name, email, password) => {
  const url_api = "/v1/api/register";  // full URL for local dev
  try {
    const response = await axios.post(url_api, {
      name,
      email,
      password,
    });
    return response;
  } catch (error) {
    console.error('Error creating user:', error);
    return { status: 500, message: 'Server error, please try again.' };
  }
};
const login = async ( email, password) => {
  const url_api = "/v1/api/login";  // full URL for local dev
  try {
    const response = await axios.post(url_api, {
      email,
      password,
    });
    return response;
  } catch (error) {
    console.error('Error creating user:', error);
    return { status: 500, message: 'Server error, please try again.' };
  }
};
const getListUser = async () => {
  const url_api = "/v1/api/user"; // full URL for local dev
  try {
    const response = await axios.get(url_api);
    return response.data; // Return the data directly
  } catch (error) {
    console.error('Error fetching user list:', error);
    return { status: 500, message: 'Server error, please try again.' };
  }
};
export { createUserAPI,login,getListUser };
