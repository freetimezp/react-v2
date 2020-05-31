import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "72a23f36-c272-4944-ad58-057cbee638af"
  }
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => { 
        return response.data;
      });
  },
  follow(id) {
    return instance.delete(`follow/${id}`)
      .then(response => { 
        return response.data;
      });
  },
  unFollow(id) {
    return instance.post(`follow/${id}`, {})
      .then(response => { 
        return response.data;
      });
  }
} 
