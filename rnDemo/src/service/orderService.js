import config from '../utils/config';
import {postRequest, getRequest} from '../utils/ajax';

export const addToCart = (data, callback) => {
  const url = `${config.backendUrl}/order/addToCart?userId=${data.userId}&groupId=${data.groupId}&goodsId=${data.goodsId}&goodsNumber=${data.goodsNumber}`;
  // console.log('addToCart data:', data);
  getRequest(url, data, callback);
};

export const getCart = (data, callback) => {
  const url = `${config.backendUrl}/order/getGroupCart?userId=${data.userId}&groupId=${data.groupId}`;
  // console.log('getCart data:', data);
  getRequest(url, data, callback);
};

export const addOrder = (data, callback) => {
  const url = `${config.backendUrl}/order/addOrder?userId=${data.userId}&groupId=${data.groupId}&addressId=${data.addressId}&time=${data.time}`;
  console.log('addOrder data:', data);
  getRequest(url, data, callback);
};

export const getOrderById = (data, callback) => {
  const url = `${config.backendUrl}/order/getOrderByUserId?userId=${data.userId}`;
  getRequest(url, data, callback);
};

export const deleteOneOrder = (data, callback) => {
  const url = `${config.backendUrl}/order/deleteOneOrder?orderId=${data.orderId}`;
  getRequest(url, data, callback);
};

export const getOrderByGroupId = (data, callback) => {
  const url = `${config.backendUrl}/order/getOrderByGroupId?groupId=${data.groupId}`;
  getRequest(url, data, callback);
};

export const getOrderInfo = (data, callback) => {
  const url = `${config.backendUrl}/order/getOrderInfo?userId=${data.userId}`;
  getRequest(url, data, callback);
};
