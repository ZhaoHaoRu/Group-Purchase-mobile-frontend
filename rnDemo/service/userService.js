import config from '../utils/config';
import {postRequest, getRequest} from '../utils/ajax';

export const login = (data, callback) => {
  const url = `${config.backendUrl}/user/userAuth?userName=${data.userName}&password=${data.password}`;
  // console.log('url: ', url);
  // console.log('the data:', data);
  // postRequest(url, data, callback);
  postRequest(url, data, callback);
};

export const register = (data, callback) => {
  const url = `${config.backendUrl}/user/register?userName=${data.userName}&password=${data.password}&email=${data.email}`;
  postRequest(url, data, callback);
};

export const getAddress = (data, callback) => {
  const url = `${config.backendUrl}/user/getUserAddress?id=${data.userId}`;
  getRequest(url, data, callback);
};

export const setAddress = (data, callback) => {
  // /user/setNewAddress
  const url = `${config.backendUrl}/user/setNewAddress?userId=${data.userId}&receiver=${data.receiver}&phone=${data.phone}&region=${data.region}&location=${data.location}`;
  getRequest(url, data, callback);
};

export const getUserById = (data, callback) => {
  const url = `${config.backendUrl}/user/getUserById?id=${data.userId}`;
  // console.log("getUerByID:" , url, data);
  getRequest(url, data, callback);
};

export const getCreatedGroup = (data, callback) => {
  const url = `${config.backendUrl}/user/getCreatedGroup?userId=${data.userId}`;
  console.log("getCreatedGroup:", url);
  getRequest(url, data, callback);
};

export const recommend = (data, callback) => {
  const url = `${config.backendUrl}/user/recommend?userId=${data.userId}`;
  console.log("recommend:", url);
  getRequest(url, data, callback);
};
