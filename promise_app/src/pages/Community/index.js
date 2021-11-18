import React, {useState, useEffect} from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Divider } from 'react-native-paper';
import { getCommunityAPI } from '../../utils/axios';
import { getCommunityAction } from '../../modules/community/actions';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RoundBtn from '../../components/atoms/RoundBtn'; 
import SearchBar from '../../components/community/SearchBar';
import PostList from '../../components/community/PostList';

const CommunityPage = ({navigation, route}) => {

    const dispatch = useDispatch();
    const [ communityList, setCommunityList ] = useState([])
    const [ created, setCreated ] = useState(false)
    const [ searchKeyword, setSearchKeyword ] = useState('')

    const getCommunity = () => {
        return getCommunityAPI.list(1).then(res => {
            dispatch(getCommunityAction(res))
            setCommunityList(res.communityDetailList)
        })   
    }
    
    useEffect(()=>{
        getCommunity()
    }, [])
    
    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9' }}>
            <SearchBar searchKeyword={searchKeyword} />
            <View style={{width:'100%', margin:10, marginBottom:55 }}>
                <PostList/>
            </View>
            <RoundBtn 
                func={()=>navigation.navigate('communitywrite')}
                text={<Icon name="plus" 
                style={{
                color: "white",
                fontSize: 30,
                }} />}>
            </RoundBtn>
        </View>
    );
};

export default CommunityPage;