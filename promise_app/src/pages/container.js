import Test from './test';
import { connect } from 'react-redux';
import ActionCreator from '../modules/actions';

const mapStateToProps = (state) => ({
    nickname: state.user.changeNickname
});

const mapDispatchToProps = (dispatch) => ({
    onChangeNickname: (nickname) => {
        dispatch(ActionCreator.changeNickname(nickname));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);