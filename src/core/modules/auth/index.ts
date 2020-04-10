import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import { appModule } from '../../lib/modules';

export const screens = {
    login:LoginScreen,
    signup:SignupScreen
}
export const key = 'auth';

export const AuthModule:appModule = ({
    screens,
    key
}) => {

}