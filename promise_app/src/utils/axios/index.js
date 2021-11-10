import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

let request = axios.create({
    baseURL:'https://k5a201.p.ssafy.io/api'
});

function setToken (value){
    AsyncStorage.setItem('token', `Bearer ${value}`);
};

export const myinfo = async ()=>{
    AsyncStorage.getItem('token')
    .then((token)=>{
        request.defaults.headers.common['Authorization'] = token;
        request.get('/users',{} )
        .then((response)=>{
            console.log(response);
        })
    })
};

export const userAPI = {
    login: async(userEmail, userPassword, userLoginType) =>{
        return await request.post('/auth/login',{
            userEmail, userPassword, userLoginType
        }).then((response) =>{
            setToken(response.data.accessToken);
            AsyncStorage.setItem('isLogin', 'true');
        }).catch((error) =>{
            console.log(error.response);
        })
    },
    social:async(userEmail, userPassword, userLoginType) =>{
        return await request.post('/auth/social',{
            userEmail, userPassword, userLoginType
        }).then((response) =>{
            setToken(response.data.accessToken);
            AsyncStorage.setItem('isLogin', 'true');
        }).catch((error) => {
            if (error.response.status === 404){
                return error.response.status;
            }
        })
    },
    join: async(userEmail, userPassword, userNickname, userProfileUrl, petName, userJoinType)=>{
        return await request.post('/users',{
            userEmail, userPassword, userNickname, userProfileUrl, petName, userJoinType
        }).then((response)=>{
            return response.data.statusCode;
        }).catch((error) =>{
            return error.response.status;
        })
    },
    nickCheck: async(userNickname) =>{
        return await request.get(`/users/nickname/${userNickname}`,{
        }).then((response)=>{
            return response.data.statusCode;
        }).catch((error) =>{
            return error.response.status;
        });
    },
    emailCheck: async(userEmail) =>{
        return await request.get(`/users/email/${userEmail}`,{
        }).then((response)=>{
            return response.data.statusCode;
        }).catch((error) =>{
            return error.response.status;
        });
    }
}