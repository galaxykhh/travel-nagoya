import { axiosInstance } from './axiosInstance';

class AuthRepository {
    
    signIn(data) {
        return axiosInstance.post('/signin', data);
    };

    signUp(data) {
        return axiosInstance.post('/signup', data);
    };
};

const authRepository = new AuthRepository();
export default authRepository;