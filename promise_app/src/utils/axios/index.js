import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

let request = axios.create({
    // baseURL: 'http://localhost:8080/api'
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
            return error.response.status;
        })
    },
    social:async(userEmail, userPassword, userLoginType) =>{
        return await request.post('/auth/social',{
            userEmail, userPassword, userLoginType
        }).then((response) =>{
            setToken(response.data.accessToken);
            console.log(response.data.accessToken);
            AsyncStorage.setItem('isLogin', 'true');
        }).catch((error) =>{
            return error.response.status;
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
    },
}

export const getPharmacyAPI = async (lat, lon) => {
    return await request.get('/pharmacies', {
        headers:{
            'Authorization': await AsyncStorage.getItem('token')
        },
        params: {
            lat: lat,
            lon: lon
        }
    })
    .then((response) => {
        console.log("then : ",response.data);
        return response.data;
    })
    .catch((error) => {
        console.log("error : ",request.defaults.headers.common['Authorization']);
        console.log("error.response : ", error.response);
    });
}
