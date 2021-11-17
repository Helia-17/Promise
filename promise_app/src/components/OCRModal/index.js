import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

const OCRModal = (props) => {
    const [ocrPillData, setOcrPillData] = useState(props.data);
    const [selectedData, setSelectedData] = useState([]);

    const addData = (data)=>{
        if(selectedData){
            let flag = false;
            selectedData.map(item=>{
                if(item.id === data.mediSerialNum) flag = true;
            });
            if (flag===true) {
                setSelectedData(selectedData.filter(item=>item.id !== data.mediSerialNum));
            }else{
                setSelectedData([
                    ...selectedData,
                    {id:data.mediSerialNum, name:data.mediName},
                ]);
            }
        }
    }
    
    const myOCRList = ()=>{
        let result = [];
        if(ocrPillData){
            ocrPillData.map(item=>{
                let flag = false;
                for(let key in selectedData){
                    if(item.mediSerialNum === selectedData[key].id){
                        flag = true;
                        result = result.concat(
                            <TouchableOpacity style={{flexDirection: "row", alignItems: 'center', width:'85%', margin:10, marginTop:0, justifyContent: 'space-around', height:40, borderRadius: 5, borderColor:'black', borderWidth:0.5}}
                            onPress={()=>addData({mediSerialNum:item.mediSerialNum, mediName:item.mediName})}>
                                <Text style={{color:'black', width:'90%', textAlign:'center'}}>{item.mediName}</Text>
                            </TouchableOpacity>
                        )
                    }
                }
                if(flag === false){
                    result = result.concat(
                        <TouchableOpacity style={{flexDirection: "row", alignItems: 'center', width:'85%', margin:10, marginTop:0, justifyContent: 'space-around', height:40, borderRadius: 5, borderColor:'rgba(0,0,0,0.3)', borderWidth:0.5}}
                        onPress={()=>addData({mediSerialNum:item.mediSerialNum, mediName:item.mediName})}>
                            <Text style={{color:'black', width:'90%', textAlign:'center'}}>{item.mediName}</Text>
                        </TouchableOpacity>
                    )
                }
            })
        }
        return result;
    }

    const sendProps = ()=>{
        props.selected(selectedData);
        if(selectedData.length===0){
            alert('선택하신 약이 없습니다!');
        }
        props.visible(false);
    }

    useEffect(()=>{
        setSelectedData([]);
        if(props.data.length===0){
            alert('OCR로 인식된 약이 없습니다.');
            props.selected([]);
            props.visible(false);
        }
    }, []);

    return(
        <View style={{justifyContent: 'center', alignItems: 'center', flex:1, backgroundColor:'rgba(0,0,0,0.5)'}}>
            <View style={{position: 'absolute', width: '80%', height: '50%', backgroundColor: 'white', borderRadius: 20, elevation:2}} >
                <View style={{flexDirection: "row", margin:20, alignItems: 'center', justifyContent:'flex-end', marginRight:10}}>
                    <Icon.Button name='close' size={17} color='black' backgroundColor='white' onPress={()=>props.visible(false)}/>
                </View>
                <ScrollView style={{ width:'100%'}} contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
                    {myOCRList()}
                </ScrollView>
                <View style={{margin:20, alignItems: 'center'}}>
                    <TouchableOpacity style={{backgroundColor:'#B8CE9C', color:'black', width:'30%', alignItems: 'center', borderRadius: 5, height:30, justifyContent: 'center'}} onPress={()=>sendProps()}>
                        <Text style={{color:'black', fontSize:15, fontWeight:'bold'}}>등록</Text >
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

export default OCRModal;