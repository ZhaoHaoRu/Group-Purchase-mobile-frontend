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
