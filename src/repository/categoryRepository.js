import { axiosInstance } from './axiosInstance';

class CategoryRepository {

    handleCategory(category) {
        switch (category) {
            case 'food' :
                return this.getFoodData();
            case 'shop' :
                return this.getShoppingData();
            case 'tour' :
                return this.getTourData();
        };
    };
    
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