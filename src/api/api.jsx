import axios from "axios";

const URl = "https://api.github.com/users/asadbe0304"
// const base = "https://api.github.com/users/asadbe0304/repos"

export const API = {
    getMy: async ()=> axios.get(`${URl}`),
    getRepos: async ()=> axios.get(`${URl}/repos`)
    // getItem: async (title) => axios.get(`${URl}/name/${title}`),/
}