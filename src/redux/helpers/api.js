import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const RAILS_API = 'http://10.0.2.2:3001/api/v1';

export const config = {
  headers: {
    Authorization: `token ${AsyncStorage.getItem('token')}`,
  },
};

export const api = {
  post(endpoint, data, headers) {
    return axios.post(`${RAILS_API}${endpoint}`, data, headers);
  },
  get(endpoint, headers) {
    return axios.get(`${RAILS_API}${endpoint}`, headers);
  },
  put(endpoint, headers, data) {
    return axios.put(`${RAILS_API}${endpoint}`, data, headers);
  },
  delete(endpoint, data) {
    return axios.delete(`${RAILS_API}${endpoint}`, data);
  },
};
