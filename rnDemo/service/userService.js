import config from '../utils/config';
import {postRequest} from '../utils/ajax';
import {storage} from '../utils/storage';
import {useToast} from 'native-base';

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
}
