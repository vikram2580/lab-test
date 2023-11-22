import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

export const getAddresses = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/account/addresses`);
    return response.data.addresses;
  } catch (error) {
    throw error;
  }
};

export const getBalance = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/account/balance`);
    return response.data.balance;
  } catch (error) {
    throw error;
  }
};
