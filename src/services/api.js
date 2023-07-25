import axios from 'axios';

axios.defaults.baseURL = 'https://testerp.onrender.com/api/';

export const getClients = async () => {
  try {
    const { data } = await axios.get('/client');
    return data;
  } catch (error) {
    return error;
  }
};

export const getOneClient = async id_dep_client => {
  try {
    const { data } = await axios.get(`/client/${id_dep_client}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const addClient = async object => {
  try {
    const { data } = await axios.patch(`/client`, object);
    return data;
  } catch (error) {
    return error.message;
  }
};
export const addProject = async object => {
  const { data } = await axios.post(`/project`, object);
  return data;
};

export const getProject = async () => {
  try {
    const { data } = await axios.get(`/project`);
    return data;
  } catch (error) {
    return error.message;
  }
};
