import axios from "axios";

const URl = "https://api.github.com/users/asadbe0304"
const BASE = "https://api.github.com/users"
const BaseUrl = " https://api.github.com/search/users?q=${user_name}"
// const base = "https://api.github.com/users/asadbe0304/repos"

export const API = {
    getMy: async ()=> axios.get(`${URl}`),
    getRepos: async ()=> axios.get(`${URl}/repos`),

    getAll: async (login)=> axios.get(`${BASE}`),

    getFollowers: async ()=> axios.get(`${URl}/followers`),
    getFollowing: async ()=> axios.get(`${URl}/following`),
    // getItem: async (title) => axios.get(`${URl}/name/${title}`),/
}