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

export const shareUser = async(searchKeyword) =>{
    return await request.get('/users/sharing',{
        headers:{
            'Authorization': await AsyncStorage.getItem('token')
        },
        params: {
            searchKeyword : searchKeyword
        }
    } )
    .then((response)=>{
        console.log(response);
        return response.data;
    });
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

export const ocrList = async(text) => {
    return await request.post('alarms/ocr',{
        text
    },{
        headers:{
            'Authorization': await AsyncStorage.getItem('token')
        }
    })
    .then((response)=>{
        return response.data.mediList;
    }).catch((e)=>{
        console.log(e.response);
    });
}

export const searchMedicine = async(searchKeyword) => {
    return await request.get('medicines/alarm',{
        headers:{
            'Authorization': await AsyncStorage.getItem('token')
        },
        params:{
            searchKeyword:searchKeyword
        }
    })
    .then((response)=>{
        return response.data;
    }).catch((e)=>{
        console.log(e.response);
    });
}

export const enrollAlarm = async(alarmTitle, alarmYN, alarmTime1, alarmTime2, alarmTime3, alarmDayStart, alarmDayEnd, alarmMediList, tagList, shareEmail) => {
    return await request.post('alarms',{
        alarmTitle, alarmYN, alarmTime1, alarmTime2, alarmTime3, alarmDayStart, alarmDayEnd, alarmMediList, tagList, shareEmail
    },{
        headers:{
            'Authorization': await AsyncStorage.getItem('token')
        }
    })
    .then((response)=>{
        return response.data.alarmId;
    }).catch((e)=>{
        console.log(e.response);
    });
}

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

export const getPharmacyAPI = async (lat, lon, week, curTime) => {
    return await request.get('/pharmacies', {
        headers:{
            'Authorization': await AsyncStorage.getItem('token')
        },
        params: {
            lat: lat,
            lon: lon,
            week: week,
            curTime: curTime
        }
    })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log("error.response : ", error.response);
    });
}
