import { axiosInstance } from './axiosInstance';

class AuthRepository {
    
    signIn(data) {
        return axiosInstance.post('/signin', data);
    };

    signUp(data) {
        return axiosInstance.post('/signup', data);
    };

    checkAccount(account) {
        return axiosInstance.get(`/check/${account}`);
    };
};

const authRepository = new AuthRepository();
export default authRepository;