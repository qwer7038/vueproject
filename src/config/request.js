import axios from "axios";
export function func001(urlConfig) {
    const test1=axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    });
    test1.interceptors.request.use(a=>{
        console.log(a)
    },b=>{
        console.log(b)
    })



    return test1(urlConfig)

}