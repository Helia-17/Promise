import * as userAction from './user/actions';
import * as communityAction from './community/actions';

const ActionCreators = Object.assign({},
    userAction,
    communityAction,
);

export default ActionCreators;