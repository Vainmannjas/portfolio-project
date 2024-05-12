import { IProduct } from '../types/product.interface'

export const getProducts = async(): Promise<IProduct[]> => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/products');

        if(!response.ok) {
            console.log('У вас произошла ошибка ответа');
            return [];
        }
        return response.json();
    } catch(error) {
        console.error('Ошибка получения данных о продуктах: ', error);
        return [];
    }
}
