/*
*采用axios
 */
import axios from 'axios';
const githubApi = 'https://api.github.com/users/simple-peng';

export const getGithubData = ()=>{
  return axios.get(githubApi).then(data=>{
    return data
  })
}