import { GetAllUser, Signin, Signup } from "../../Api/Api_User";


export const OauthServiceSignin = async (info) => {
    const { data } = await Signin(info);
    const { message, accessToken, user } = data;
    // const checkEmail = info.email.includes("@gmail.com");
    // if (!checkEmail) { return "Không đúng định dạng email !" };
    
    const RoleUser = user.role;
    if (RoleUser == "admin") { return { role: "admin", accessTokenUser: accessToken, dataUser: user,message } };
    if (RoleUser == "staff") { return { role: "staff", accessTokenUser: accessToken, dataUser: user,message } };
    return { role: "member", accessTokenUser: accessToken, dataUser: user,message };
};

export const OauthServiceSignup = async (info) => {
    const { data } = await Signup(info);
    return data;
}