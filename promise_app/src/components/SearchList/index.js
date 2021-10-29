import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AgeWarningIcon from '../frames/AgeWarningIcon';
import ElderlyWarningIcon from '../../components/frames/ElderlyWarningIcon';
import PregnantWarningIcon from '../../components/frames/PregnantWarningIcon';

const SearchList = (props) => {
    return (
        <View>
            <TouchableOpacity style={{ width:'90%', borderRadius:15, backgroundColor:'white', alignItems:'center', flexDirection: "row", justifyContent:'space-between', padding:'5%', marginTop:'4%' }}
            onPress={() =>props.navigation.navigate('Info', {name:`${props.name}`, company:`${props.company}`})}>
                <View>
                    <Text style={{ fontSize:20, fontWeight:'bold', color:'black' }}>{props['name']}</Text>
                    <Text style={{ fontSize:12, color:'#4F4F4F' }}>{props['company']}</Text>
                </View>
                <View style={{flexDirection: "row", width:'20%', justifyContent:'space-between'}}>
                    <AgeWarningIcon/>
                    <PregnantWarningIcon/>
                    <ElderlyWarningIcon/>
                </View>
            </TouchableOpacity>
        </View>
    );
};
export default SearchList;