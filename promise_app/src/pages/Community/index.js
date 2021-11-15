import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import { getCommunityAPI } from '../../utils/axios';
import { getCommunityAction } from '../../modules/community/actions';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RoundBtn from '../../components/atoms/RoundBtn'; 
import SearchBar from '../../components/community/SearchBar';
import PostList from '../../components/community/PostList';
import Spinner from 'react-native-loading-spinner-overlay';

const CommunityPage = ({navigation, route}) => {

    const dispatch = useDispatch();
    const { communityList, communityPostCreated } = useSelector((state) => state.community);
    const [ created, setCreated ] = useState(false)
    const [isVisible, setIsvisible] = useState();

    const getCommunity = () => {
        setIsvisible(true);
        return getCommunityAPI.list(1).then(res => {
            dispatch(getCommunityAction(res))
            setIsvisible(false);
        })
        
    }
    
    useEffect(()=>{
        if (route.params) {
            if (route.params.created) {
                setCreated(true)
            }
        } else {
            setCreated(false)
        }
        getCommunity()
    }, [])

    useEffect(()=> {
        getCommunity()
    }, [created])
    
    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9' }}>
            <Spinner visible={isVisible} />
            <SearchBar/>
            <View style={{width:'100%', margin:10, marginBottom:55 }}>
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