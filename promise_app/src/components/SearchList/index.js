import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AgeWarningIcon from '../frames/AgeWarningIcon';
import ElderlyWarningIcon from '../../components/frames/ElderlyWarningIcon';
import PregnantWarningIcon from '../../components/frames/PregnantWarningIcon';

const SearchList = (props) => {

    const mediSerialNum = props.serialNum;
    const mediElderlyCare = props.elderCare;
    const mediPregnancyCare = props.pregnancyCare;
    const mediAgeCare = props.ageCare;
    const [mediName, setMediName] = useState('');

    const replaceMediName = () => {
        if (props['name'].includes('(')) {
            setMediName(props['name'].replace(/\(/g, '\n('));
        }else{
            setMediName(props['name']);
        }
    }

    useEffect(() => {
        replaceMediName();
    },[props['name']])

    return (
        <View>
            <TouchableOpacity style={style.searchListContainer}
            onPress={() =>props.navigation.navigate('Info', {serialNum: `${mediSerialNum}`,name:`${props.name}`, company:`${props.company}`})}>
                <View style={{width:'78%'}}>
                    <Text style={{ fontSize:20, fontWeight:'bold', color:'black' }}>{mediName}</Text>
                    <Text style={{ fontSize:12, color:'#4F4F4F' }}>{props['company']}</Text>
                </View>
                <View style={{ flexDirection: "row", width: '20%', justifyContent: 'center' }}>
                    {mediAgeCare == 1 ? (
                        <AgeWarningIcon/>
                    ) : (null)}
                    {mediPregnancyCare == 1 ? (
                        <PregnantWarningIcon/>
                    ) : (null)}
                    {mediElderlyCare == 1 ? (
                        <ElderlyWarningIcon/>
                    ) : (null)}
                    {/* <AgeWarningIcon/>
                    <PregnantWarningIcon/>
                    <ElderlyWarningIcon/> */}
                </View>
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    searchListContainer: {
        width: '90%',
        borderWidth: 0.3,
        borderColor: '#BBBBBB',
        borderRadius: 15,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: '5%',
        marginTop: '4%'
    }
})
export default SearchList;