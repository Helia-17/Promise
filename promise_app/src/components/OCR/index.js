import React,{useState} from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import {Alert, TouchableOpacity } from 'react-native';
import {CAMERA_KEY} from '../../utils/oauth';
import {ocrList} from '../../utils/axios';

const OCR = (props) => {

    const API_URL = "https://vision.googleapis.com/v1/images:annotate?key=";

    const goOCR = ()=>{
        Alert.alert(
            'OCR 카메라',
            '앨범 또는 카메라에서 사진을 넣어주세요.',
            [
                {
                    text:'취소',
                    onPress:()=>{}
                },
                {
                    text:'앨범',
                    onPress: ()=> Album()
                },
                {
                    text:'카메라',
                    onPress: ()=> addImg()
                }
            ],
            {cancleable:true},
        );
    }
    const callGoogleVIsionApi = async (base) => {
        await fetch(API_URL + CAMERA_KEY, {
            method: 'POST',
            body: JSON.stringify({
            requests: [
                {
                image: {
                    content: base,
                },
                features: [{"type": "TEXT_DETECTION"}],
                },
            ],
            }),
        })
        .then((res) => res.json())
            .then((data) => {
                let text = (data.responses[0].fullTextAnnotation.text).replace(/[^a-zA-Z0-9가-힣\s]/g, "")
                text = text.replace(/\n/gi, " ")
                callOCR(String(text));
            })
            .catch((err) => {
                alert('OCR 인식에 실패했습니다. 직접 입력해주세요!');
                });
    }
    
    const callOCR = async (text)=>{
        const res = await ocrList(text);
        props.data(res);
    }

    function addImg () {
        launchCamera(
            {
            mediaType: 'photo',
            includeBase64: true,
            maxHeight: 300,
            maxWidth: 300,
            },
            (response) => {
                if(!response.didCancel){
                    callGoogleVIsionApi(response.assets[0].base64);
                }
        });
        
    };

    function Album(){
        launchImageLibrary(
            {
            mediaType: 'photo',
            includeBase64: true,
            maxHeight: 500,
            maxWidth: 500,
            },
            (response) => {
                if(!response.didCancel){
                    callGoogleVIsionApi(response.assets[0].base64);
                }
            }
        );
    };

    return (
        <TouchableOpacity onPress={()=>goOCR()} style={{marginLeft:20}}>
            <Icon name='camera' size={20} color='black' backgroundColor='#E9E9E9' style={{paddingRight:0}} />
        </TouchableOpacity>
    );
};


export default OCR;
