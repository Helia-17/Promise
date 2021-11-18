import React, {useState, useEffect} from 'react';
import {RNS3} from 'react-native-aws3';
import AWS from 'aws-sdk';
import { launchImageLibrary } from 'react-native-image-picker';
import { View, Alert  } from 'react-native';
import {ACCESS_KEY, SECRET_ACCESS_KEY} from '../../utils/oauth';
import RoundBtn from '../../components/atoms/RoundBtn';
import Icon from 'react-native-vector-icons/Ionicons';
import {myinfo, uploadProfile} from '../../utils/axios';

const BUCKET_REGION = 'ap-northeast-2';
const S3_BUCKET = 'promise-precure'; 

AWS.config.update({
    region: BUCKET_REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY
});

const options = {
    keyPrefix:'profile/',
    bucket:S3_BUCKET,
    region: BUCKET_REGION,
    accessKey: ACCESS_KEY,
    secretKey: SECRET_ACCESS_KEY,
    successActionStatus:201
};

function S3Upload(props) {
    const [filename, setName] = useState('');
    useEffect(()=>{
        loadfilename();
    }, []);

    async function loadfilename(){
        const result = await myinfo();
        setName(result.userEmail.split('@')[0]+'_'+result.userEmail.split('@')[1].split('.')[0]+'_'+result.userEmail.split('@')[1].split('.')[1]+`_profile.png`);
        return result.userEmail.split('@')[0]+'_'+result.userEmail.split('@')[1].split('.')[0]+'_'+result.userEmail.split('@')[1].split('.')[1]+`_profile.png`;
    }
    async function loadUserUrl (){
        const result =  await myinfo();
        return result.userProfileUrl;
    }
 

    const handleFileInput = () => {
        launchImageLibrary(
            {
            mediaType: 'photo',
            includeBase64: false,
            },
            (response) => {
                if(!response.didCancel){
                    const file = {
                        uri: response.assets[0].uri,
                        name: filename,
                        type: response.assets[0].type
                    }
                    
                    Alert.alert(
                        '프로필 이미지',
                        '해당 이미지로 프로필을 바꾸시겠습니까?',
                        [{
                            text:'예',
                            onPress : ()=>{
                                uploadFile(file)
                            }
                        },{
                            text:'아니요',
                            onPress : ()=>{}
                        }]
                    );
                }
            }
        );
    }

    const uploadFile = (file) => {
        if(file.uri==='' || file.uri===null) alert('파일을 등록해주세요.');
        else{
            Promise.resolve(loadUserUrl()).then(function(name){
                if (name != null) {
                    const deleteKey = "profile/"+ name
                    
                    const promise_delete = deleteProfile(deleteKey).promise()

                    promise_delete.then(
                        function () {
                            RNS3.put(file, options)
                            .then((response)=>{
                                if(response.status===201){
                                    sendAPI();
                                }
                            })
                        },
                        function (err) {
                            return alert("delete fail", err.message)
                        }
                    )
                }else{
                    RNS3.put(file, options)
                    .then((response)=>{
                        if(response.status===201){
                            sendAPI();
                        }
                    })
                }
            });
        }
    }

    async function sendAPI(){
        await uploadProfile(`https://promise-precure.s3.ap-northeast-2.amazonaws.com/profile/${filename}`);
        props.name(`https://promise-precure.s3.ap-northeast-2.amazonaws.com/profile/${filename}?${new Date()}`);
    }
    const deleteProfile = (deleteKey) => new AWS.S3().deleteObject(
    {
        Bucket: S3_BUCKET,
        Key: deleteKey
    }
    )

    return (
        <View style={{position:'absolute', width:'50%', height:200, alignItems:'flex-end', justifyContent: 'flex-end'}}>
            <RoundBtn text={<Icon name='pencil' color='black' size={30}/>} func={()=>handleFileInput()}/>
        </View>
    )
}

export default S3Upload;