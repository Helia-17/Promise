import React from 'react';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import CommunityPage from '../../pages/Community';
import PostCreatePage from '../../pages/PostCreate';
import PostDetailPage from '../../pages/PostDetail';

const CommunityNav = () => {
    const Stack = createNativeStackNavigator();

    return (
      <Stack.Navigator >
        <Stack.Screen name='community' component={CommunityPage} options={{title:'커뮤니티'}}/>
        <Stack.Screen name='communitywrite' component={PostCreatePage} options={{title:'글 작성'}}/>
        <Stack.Screen name='communitydetail' component={PostDetailPage} options={{title:''}}/>
      </Stack.Navigator>
    );

}

export default CommunityNav;