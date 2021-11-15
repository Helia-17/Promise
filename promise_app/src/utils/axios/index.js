import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

let request = axios.create({
  baseURL: 'https://k5a201.p.ssafy.io/api',
});

function setToken(value) {
  AsyncStorage.setItem('token', `Bearer ${value}`);
}

export const myinfo = async () => {
  return await request.get(`/users`, {
    headers: {
      Authorization: await AsyncStorage.getItem('token'),
    }
  })
  .then(response => {
<<<<<<< HEAD
    // console.log(response.data);
=======
>>>>>>> FE_AR
    return response.data;
  }).catch(err => {
    console.log(err.response);
  });
};

export const withdraw = async()=>{
  return await request.delete(`/users`, {
    headers: {
      Authorization: await AsyncStorage.getItem('token'),
    }
  })
  .then(response => {
    console.log(response.data)
    return response.data.statusCode;
  });
}

export const shareUser = async searchKeyword => {
  return await request
    .get('/users/sharing', {
      headers: {
        Authorization: await AsyncStorage.getItem('token'),
      },
      params: {
        searchKeyword: searchKeyword,
      },
    })
    .then(response => {
      return response.data;
    });
};

export const getPeriod = async (periodType) => {
  return await request.get(`/alarms/${periodType}`, {
      headers: {
        Authorization: await AsyncStorage.getItem('token'),
      }
    })
    .then(response => {
      return response.data.alarmList;
    });
};

export const getAlarmlist = async (nowDate)=>{
  return await request.get('/alarms', {
      headers: {
        Authorization: await AsyncStorage.getItem('token'),
      },
      params: {
        nowDate: nowDate,
      },
    })
    .then(response => {
      return response.data.alarmList;
    })
    .catch(e => {
      console.log(e.response);
    });
}

export const getCalendar = async(nowMonth)=>{
  return await request.get('/alarms/calendar', {
    headers: {
      Authorization: await AsyncStorage.getItem('token'),
    },
    params: {
      nowMonth: nowMonth,
    },
  })
  .then(response => {
    return response.data.alarmList;
  })
  .catch(e => {
    console.log(e.response);
  });
}

export const ocrList = async text => {
  return await request
    .post(
      '/alarms/ocr',
      {
        text,
      },
      {
        headers: {
          Authorization: await AsyncStorage.getItem('token'),
        },
      },
    )
    .then(response => {
      return response.data.mediList;
    })
    .catch(e => {
      console.log(e.response);
    });
};

export const uploadProfile = async (userProfileUrl) => {
  return await request.put('/users/profile',{
        userProfileUrl,
      },{
        headers: {
          Authorization: await AsyncStorage.getItem('token'),
        },
      },
    )
    .then(response => {
      return response.data.statusCode;
    })
    .catch(e => {
      console.log(e.response);
    });
};

export const searchMedicine = async searchKeyword => {
  return await request
    .get('/medicines/alarm', {
      headers: {
        Authorization: await AsyncStorage.getItem('token'),
      },
      params: {
        searchKeyword: searchKeyword,
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(e => {
      console.log(e.response);
    });
};

export const modifyNick = async (userNickname)=>{
  return await request.get(`/users/me/nickname/${userNickname}`,{
    headers: {
      Authorization: await AsyncStorage.getItem('token'),
    }
  }).then((response)=>{
    return response.data;
  }).catch((err)=>{
    if(err.response.data.statusCode===409){
      return err.response.data;
    }
  })
}

export const changeInfo = async(userNickname, petName)=>{
  return await request.put('/users',{
    userNickname, petName
  },{
    headers: {
      Authorization: await AsyncStorage.getItem('token'),
    },
  })
  .then(response => {
    return response.data.statusCode;
  })
  .catch(e => {
    console.log(e.response);
  });
}

export const enrollAlarm = async (
  alarmTitle,
  alarmYN,
  alarmTime1,
  alarmTime2,
  alarmTime3,
  alarmDayStart,
  alarmDayEnd,
  alarmMediList,
  tagList,
  shareEmail,
) => {
  return await request
    .post(
      '/alarms',
      {
        alarmTitle,
        alarmYN,
        alarmTime1,
        alarmTime2,
        alarmTime3,
        alarmDayStart,
        alarmDayEnd,
        alarmMediList,
        tagList,
        shareEmail,
      },
      {
        headers: {
          Authorization: await AsyncStorage.getItem('token'),
        },
      },
    )
    .then(response => {
      return response.data.alarmId;
    })
    .catch(e => {
      console.log(e.response);
    });
};

export const userAPI = {
  login: async (userEmail, userPassword, userLoginType) => {
    return await request
      .post('/auth/login', {
        userEmail,
        userPassword,
        userLoginType,
      })
      .then(response => {
        setToken(response.data.accessToken);
        console.log('토큰설정')
      })
      .catch(error => {
        console.log(error.response);
        return error.response.status;
      });
  },
  social: async (userEmail, userPassword, userLoginType) => {
    return await request
      .post('/auth/social', {
        userEmail,
        userPassword,
        userLoginType,
      })
      .then(response => {
        setToken(response.data.accessToken);
      })
      .catch(error => {
        return error.response.status;
      });
  },
  join: async (
    userEmail,
    userPassword,
    userNickname,
    userProfileUrl,
    petName,
    userJoinType,
  ) => {
    return await request
      .post('/users', {
        userEmail,
        userPassword,
        userNickname,
        userProfileUrl,
        petName,
        userJoinType,
      })
      .then(response => {
        return response.data.statusCode;
      })
      .catch(error => {
        return error.response.status;
      });
  },
  nickCheck: async userNickname => {
    return await request
      .get(`/users/nickname/${userNickname}`, {})
      .then(response => {
        return response.data.statusCode;
      })
      .catch(error => {
        return error.response.status;
      });
  },
  emailCheck: async userEmail => {
    return await request
      .get(`/users/email/${userEmail}`, {})
      .then(response => {
        return response.data.statusCode;
      })
      .catch(error => {
        return error.response.status;
      });
  },
};

export const getPharmacyAPI = async (lat, lon, week, curTime) => {
  return await request
    .get('/pharmacies', {
      headers: {
        Authorization: await AsyncStorage.getItem('token'),
      },
      params: {
        lat: lat,
        lon: lon,
        week: week,
        curTime: curTime,
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log('error.response : ', error.response);
    });
}

export const getCommunityAPI = {
  list: async (pageNum) => {
    return await request.get('/communities/list', {
        headers:{
            'Authorization': await AsyncStorage.getItem('token')
        },
        params: {
            pageNum: pageNum
        }
    })
    .then((response) => {
        // console.log(response.data)
        return response.data;
    })
    .catch((error) => {
        console.log("error.response : ", error.response);
    });
  },
  detail: async (commuId) => {
    return await request.get(`/communities/detail`, {
        headers:{
            'Authorization': await AsyncStorage.getItem('token')
        },
        params: {
          commuId: commuId
        }
    })
    .then((response) => {
        // console.log(response.data)
        return response.data;
    })
    .catch((error) => {
        console.log("error.response : ", error.response);
    });
  },
  create: async (commuTitle, commuContents) => {
    return await request.post(
      `/communities`, 
      {
        commuTitle,
        commuContents,
      },
      {
        headers:{
            'Authorization': await AsyncStorage.getItem('token')
        },
      }
    )
    .then((response) => {
        // console.log(response.data)
        return response.data;
    })
    .catch((error) => {
        console.log("error.response : ", error.response);
    });
  },
  update: async (commuId, commuTitle, commuContents) => {
    const test = AsyncStorage.getItem('token')
    return await request.put(
      `/communities`,
      {
        commuId,
        commuTitle,
        commuContents,
      },
      {
        headers:{
            'Authorization': await AsyncStorage.getItem('token')
        },
      }
    )
    .then((response) => {
        // console.log(response.data)
        return response.data;
    })
    .catch((error) => {
        console.log("error.response : ", error.response);
    });
  },
  delete: async (commuId, commuTitle, commuContents) => {
    return await request.delete(`/communities/${commuId}`, {
        headers:{
            'Authorization': await AsyncStorage.getItem('token')
        },
        params: {
          commuId: commuId,
        }
    })
    .then((response) => {
        // console.log(response.data)
        return response.data;
    })
    .catch((error) => {
        console.log("error.response : ", error.response);
    });
  },
  commentCreate: async (commuId, commentContents) => {
    return await request.post(
      `/communities/comment`, 
      {
        commuId,
        commentContents,
      },
      {
        headers:{
            'Authorization': await AsyncStorage.getItem('token')
        },
      }
    )
    .then((response) => {
        console.log(response.data)
        return response.data;
    })
    .catch((error) => {
        console.log("error.response : ", error.response);
    });
  },
  commentDelete: async (commentId) => {
    return await request.delete(`/communities/comment/${commentId}`, {
        headers:{
            'Authorization': await AsyncStorage.getItem('token')
        },
        params: {
          commentId: commentId,
        }
    })
    .then((response) => {
        console.log(response.data)
        return response.data;
    })
    .catch((error) => {
        console.log("error.response : ", error.response);
    });
  },
}

export const getMediListAPI = async searchKeyword => {
  return await request
    .get('/medicines/search', {
    headers: {
      Authorization: await AsyncStorage.getItem('token'),
    },
    params: {
      searchKeyword: searchKeyword,
    }
  })
  .then((response) => {
      return response.data.mediList;
  })
  .catch((error) => {
    console.log("error.response: ", error.response);
  })
}

export const getMediDetailAPI = async mediSerialNum => {
  return await request
    .get(`/medicines/detail/${mediSerialNum}`, {
      headers: {
        Authorization: await AsyncStorage.getItem('token'),
      }
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("error.response: ", error.response);
    })
}
