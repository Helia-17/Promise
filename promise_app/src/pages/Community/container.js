// import CommunityPage from ".";
// import { connect } from 'react-redux';
// import ActionCreator from '../modules/actions';
// import { getCommunityAPI } from '../../utils/axios';
// import react, {useState} from 'react'

// store 안의 state 값을 props 로 연결해줍니다.
// const mapStateToProps = (state) => ({
//     communityList: state.community.communityList
// });

// const [page, setPage] = useState(0)

// const getCommunity = async () => {
//     //   setPage(1);
//     //   console.log('페이지1로설정', page)
//       const res = await getCommunityAPI(1);
//       if (res === 404) {
//         console.log(state.community.communityList)
//       }else if(res===402){
//         alert('Google 계정으로 가입된 계정입니다. Google로 계속하기를 시도해주세요.');
//       }else if(res===403){
//         alert('Apple 계정으로 가입된 계정입니다. Apple로 계속하기를 시도해주세요.');
//       }else if(res===405){
//         alert('일반 계정으로 가입된 계정입니다. 일반 로그인을 시도해주세요.');
//       }else{
//         props.res(true);
//       }
//     }

//   const getAndSaveCommunity = async () => {
//     getCommunity()
//   }
  
//   getAndSaveCommunity().then(() => {
//       console.log('hi')
//   })
  

// const mapDispatchToProps = (dispatch) => ({
    
//     onGetCommunityList: (communityList) => {
//         dispatch(ActionCreator.getCommunityAction(nickname));
//     }
// });

// Counter 컴포넌트의 Container 컴포넌트
// Counter 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할을 합니다.

// export default connect(mapStateToProps, mapDispatchToProps)(CommunityPage);