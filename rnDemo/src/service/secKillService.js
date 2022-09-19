import {postRequest, getRequest} from '../utils/ajax';
import config from '../utils/config';

export const secKill = (data, callback) => {
  const url = `${config.backendUrl}/seckill/purchase`;
  postRequest(url, data, callback);
};

export const getSecKillResult = (data, callback) => {
  const url = `${config.backendUrl}/seckill/secKillResult?userId=${data.userId}&groupId=${data.groupId}`;
  getRequest(url, data, callback);
};
