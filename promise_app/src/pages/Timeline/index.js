import React, {useState, useLayoutEffect} from 'react';
import { View, ScrollView, Platform, StyleSheet } from 'react-native';
import MediInfo from '../../components/atoms/MediInfo';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/AntDesign';

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
        
        if (platform==='ios'){
            result = result.concat(
                <View style={styles.pickerView}>
                    <RNPickerSelect
                        doneText={"확인"}
                        value={value}
                        onValueChange={(value)=>setValue(value)} 
                        items={[
                            {label:'이번 주', value:'week'},
                            {label:'이번 달', value:'month'},
                            {label:'최근 3개월', value:'3month'}
                        ]}
                        placeholder={{label:'범위를 선택해주세요.'}}
                        Icon={()=>{
                            return <Icon color='black' name='down' size={15} />
                        }}
                    />
                </View>
            );
        }

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
            <View style={styles.pickerLayout}>
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

const styles = StyleSheet.create({
    pickerLayout: {
        width: '90%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    pickerView: {
        width: '35%',
        justifyContent:'center',
        backgroundColor: 'white',
        borderWidth: 0.2,
        borderColor: '#bfbfbf',
        borderRadius: 5,
        height: 40,
        margin: 15,
        marginBottom: 0,
        marginRight: 0,
        paddingLeft: 10,
        paddingRight:10,
    },
    
})

export default Timeline;