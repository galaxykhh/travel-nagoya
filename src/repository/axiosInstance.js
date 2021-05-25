import axios from "axios";
import { URL } from '../config';

export const axiosInstance = axios.create({
    baseURL: URL,
});