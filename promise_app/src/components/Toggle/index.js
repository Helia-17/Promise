import React, {useState} from 'react';
import { View, Text } from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';

const Toggle = (props) => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = (isOn) =>{
        setIsOn(!isOn);
        props.result(!isOn);
    }

    return(
        <View style={{flexDirection: "row", alignItems: 'center', width:'90%', justifyContent: 'center', height:50}}>
            <Text style={{ fontSize:15, color:'black', fontWeight:'bold', width:'20%'  }}>알람 여부</Text>
            <View style={{width:'78%', height:35, alignItems: 'flex-end', justifyContent: 'center'}}>
                <SwitchToggle switchOn={isOn} onPress={()=>handleToggle(isOn)} backgroundColorOn='#5A88B1' backgroundColorOff='#9EA5AB' circleColorOff='white' circleColorOn='white'
                containerStyle={{
                    width: 60,
                    height: 30,
                    borderRadius: 25,
                    padding: 5,
                    }}
                    circleStyle={{
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                    }}/>
            </View>
        </View>
    );
};
export default Toggle;