import {KindeSDK} from '@kinde-oss/react-native-sdk-0-7x';
import Kinde from './Kinde'

export const client = new KindeSDK(
    Kinde.KINDE_ISSUER_URL, 
    Kinde.KINDE_POST_LOGOUT_REDIRECT_URL, 
    Kinde.KINDE_CLIENT_ID, 
    Kinde.KINDE_POST_LOGOUT_REDIRECT_URL
);
