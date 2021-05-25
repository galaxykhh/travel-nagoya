import { axiosInstance } from './axiosInstance';

class CategoryRepository {
    
    getFoodData() {
        return axiosInstance.get('/foodinfo');
    };

    getShoppingData() {
        return axiosInstance.get('/shopinfo');
    };

    getTourData() {
        return axiosInstance.get('/tourinfo');
    };
};

const categoryRepository = new CategoryRepository();
export default categoryRepository;