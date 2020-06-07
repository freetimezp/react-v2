import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "ac85bed2-86d7-4db3-b314-757fb2d912ea"
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
    return instance.post(`follow/${id}`)
      .then(response => { 
        return response.data;
      });
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`)
      .then(response => { 
        return response.data;
      });
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  }
} 

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  }
}
