import React, {useState, useEffect} from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
// axios, redux
import { getCommunityAPI } from '../../utils/axios';
import { getCommunityAction } from '../../modules/community/actions';
// import ActionCreators from '../../modules/actions';
import { useSelector, useDispatch } from 'react-redux';
// components
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RoundBtn from '../../components/atoms/RoundBtn'; 
import SearchBar from '../../components/community/SearchBar';
import PostList from '../../components/community/PostList';

const CommunityPage = ({navigation, route}) => {

    const dispatch = useDispatch();
    const { communityListCreated, communityList } = useSelector((state) => state.community.communityList);
    const [ created, setCreated ] = useState(false)

    // const [ list, setList ] = useState({})

    const getCommunity = () => {
        return getCommunityAPI.list(1).then(res => {
            // setList(res)
            dispatch(getCommunityAction(res))
        })
    }
    
    useEffect(()=>{
        if (route.params) {
            console.log(route.params.created)
            if (route.params.created) {
                setCreated(true)
            }
        } else {
            setCreated(false)
        }
        console.log('created', created)
        getCommunity()
    }, [])

    useEffect(()=> {
        getCommunity()
    }, [created])
    
    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9' }}>
            {/* search bar */}
            <SearchBar/>
            <View style={{width:'100%', margin:10}}>
                <PostList/>
            </View>
            <View style={{width:'100%', alignItems:'flex-end', position: 'absolute', left: 0, right: 0, bottom: 0}}>
                <RoundBtn 
                    func={()=>navigation.navigate('communitywrite')}
                    text={<Icon name="plus" 
                    style={{
                    color: "white",
                    fontSize: 30,
                    }} />}>
                </RoundBtn>
            </View>
        </View>
    );
};

export default CommunityPage;