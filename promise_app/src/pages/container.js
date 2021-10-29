import Test from './test';
import { connect } from 'react-redux';
import ActionCreator from '../modules/actions';

// const BASE_URL = process.env.REACT_APP_SERVER_URL;

// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = (state) => ({
    nickname: state.user.changeNickname
});

const mapDispatchToProps = (dispatch) => ({
    onChangeNickname: (nickname) => {
        // const nickname = 'black'; // 임시
        dispatch(ActionCreator.changeNickname(nickname));
    }
});

// Counter 컴포넌트의 Container 컴포넌트
// Counter 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할을 합니다.

export default connect(mapStateToProps, mapDispatchToProps)(Test);