import React, {useState, useLayoutEffect} from 'react';
import { View, ScrollView, Platform } from 'react-native';
import MediInfo from '../../components/atoms/MediInfo';
import RNPickerSelect from 'react-native-picker-select';

const Timeline = () => {
    const [value, setValue] = useState('week');
    const [platform, setPlatform] = useState();
    function findPlatform(){
        let result = [];
        if (platform==='android'){
            result = result.concat(
                <View style={{width:'42%', backgroundColor:'white', borderRadius:20, height:35, margin:10, marginRight:0, justifyContent: 'center'}}>
                    <RNPickerSelect 
                    value={value}
                    onValueChange={(value)=>setValue(value)} 
                    items={[
                        {label:'이번 주', value:'week'},
                        {label:'이번 달', value:'month'},
                        {label:'최근 3개월', value:'3month'}
                    ]}
                    placeholder={{label:'범위를 선택해주세요.'}}
                    style={{inputAndroid:{color:'black'}}}
                    />
                </View>
            );
        }
        
        // iOS 구현부
        // if (platform==='ios'){
        //     result = result.concat(
        //         <View>

        //         </View>
        //     );
        // }

        return result;
    }
    useLayoutEffect(()=>{
        if (Platform.OS === 'android'){
            setPlatform('android');
        }
        if (Platform.OS === 'ios'){
            setPlatform('ios');
        }
    });
    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9' }}>
            <View style={{width:'90%', alignItems: 'flex-end'}}>
                {findPlatform()}
            </View>
            <ScrollView style={{ width:'100%', margin:10}} contentContainerStyle={{alignItems: 'center'}}>
                <MediInfo name='비타민C' date='2021.10.15 15:22' />
                <MediInfo name='감기약' date='2021.10.15 15:22' pillList='해열제, 항생제, 000'/>
                <MediInfo name='비타민C' date='2021.10.15 15:22' />
                <MediInfo name='감기약' date='2021.10.15 15:22' pillList='해열제, 항생제, 000'/>
                <MediInfo name='비타민C' date='2021.10.15 15:22' />
                <MediInfo name='감기약' date='2021.10.15 15:22' pillList='해열제, 항생제, 000'/>
            </ScrollView>
        </View>
    );
};
export default Timeline;