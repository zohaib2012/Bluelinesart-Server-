import axios from "axios";

export let axioinstance=axios.create({
    baseURL:"http://localhost:7000/api",
    withCredentials:true
})