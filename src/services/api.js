const API_BASE_URL = 'https://fakestoreapi.com';

//Funcion generica para hacer peticiones fetch

const fetchData = async (endpoint)=>{
    try {
        const response = await fetch (`${API_BASE_URL}${endpoint}`);
        if (!response.ok){
            throw new Error(`Error ; ${response.status}`);
        }
        return await response.json();
    }catch (error) {
        console.error(`Error fetching data:`, error);
        throw error;
    }
};

export const api = {
    getProducts: ()=> fetchData('/products'),

    getProduct: (id)=> fetchData(`/products/${id}`),

    getCategories: ()=> fetchData('products/categories'),

    getProductsByCategory: (category)=> fetchData(`products/category/${category}`),

    getLimitedProducts: (limit)=> fetchData(`/products?limit=${limit}`)
};
