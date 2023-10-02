import axios from "axios"

const instanceUser=axios.create({
    baseURL:`http://localhost:8080/api/`
})

export const Signup=(data)=>{
    return instanceUser.post(`signup`,data);
}
export const Signin=(data)=>{
    return instanceUser.post(`signin`,data);
}
export const VerifyCode=(data)=>{
    return instanceUser.post(`verification-codes`,data);
}
export const ForgotPassword=(data)=>{
    return instanceUser.post(`forgot-password`,data);
}
export const ChangePassword=(data)=>{
    return instanceUser.post(`change-password`,data);
}
export const GetAllUser=()=>{
    return instanceUser.get(`allUser`);
}
export const GetOneUser=(idUser)=>{
    return instanceUser.get(`oneUser/${idUser}`);
}