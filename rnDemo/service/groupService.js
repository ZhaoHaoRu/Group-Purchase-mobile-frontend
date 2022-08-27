import config from '../utils/config';
import {postRequest, getRequest} from '../utils/ajax';

export const getCollectedGroups = (data, callback) => {
  // TODO 等待后端修改完后更换接口
  const url = `${config.backendUrl}/group/getCollectedGroups?userId=${data.userId}`;
  // const url = `${config.backendUrl}/group/getAllGroups`;
  postRequest(url, data, callback);
};

export const getGroupById = (data, callback) => {
  const url = `${config.backendUrl}/group/getGroupById?id=${data}`;
  console.log('getGroupById data:', url);
  getRequest(url, data, callback);
};

export const collectGroup = (data, callback) => {
  const url = `${config.backendUrl}/group/collectGroup?userId=${data.userId}&groupId=${data.groupId}`;
  console.log('collectGroup data:', url);
  postRequest(url, data, callback);
};

export const getGroupByTag = (data, callback) => {
  const url = `${config.backendUrl}/group/getGroupByTag?tag=${data.tag}`;
  console.log('getGroupByTag data:', data);
  postRequest(url, data, callback);
};

export const getAllGroup = (data, callback) => {
  const url = `${config.backendUrl}/group/getAllGroups`;
  postRequest(url, data, callback);
};

export const deleteGroup = (data, callback) => {
  const url = `${config.backendUrl}/group/deleteGroup?groupId=${data.groupId}`;
  console.log('deleteGroup url:', url);
  getRequest(url, data, callback);
};

export const changeGroup = (data, callback) => {
  const url = `${config.backendUrl}/group/changeGroup`;
  postRequest(url, data, callback);
};

export const createGroup = (data, callback) => {
  const url = `${config.backendUrl}/group/createGroup`;
  postRequest(url, data, callback);
};

export const judgeCollected = (data, callback) => {
  const url = `${config.backendUrl}/group/judgeCollected?userId=${data.userId}&groupId=${data.groupId}`;
  getRequest(url, data, callback);
};
