
import queryString from "query-string";

export const getProducts = async sortBy => {
    try {
        const response = await fetch(`https://ecomsapp.herokuapp.com/api/products?sortBy=${sortBy}&order=desc&limit=6`, {
            method: "GET"
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const getCategories = async () => {
    try {
        const response = await fetch(`https://ecomsapp.herokuapp.com/api/categories`, {
            method: "GET"
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const getFilteredProducts = async (skip, limit, filters = {}) => {
    const data = {
        limit,
        skip,
        filters
    };
    try {
        const response = await fetch(`https://ecomsapp.herokuapp.com/api/products/by/search`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

export const list = async params => {
    const query = queryString.stringify(params);
    console.log("query", query);
    try {
        const response = await fetch(`https://ecomsapp.herokuapp.com/api/products/search?${query}`, {
            method: "GET"
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const read = async productId => {
    try {
        const response = await fetch(`https://ecomsapp.herokuapp.com/api/product/${productId}`, {
            method: "GET"
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const listRelated = async productId => {
    try {
        const response = await fetch(`https://ecomsapp.herokuapp.com/api/products/related/${productId}`, {
            method: "GET"
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const getBraintreeClientToken = async (userId, token) => {
    try {
        const response = await fetch(`https://ecomsapp.herokuapp.com/api/braintree/getToken/${userId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const processPayment = async (userId, token, paymentData) => {
    try {
        const response = await fetch(`https://ecomsapp.herokuapp.com/api/braintree/payment/${userId}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(paymentData)
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const createOrder = async (userId, token, createOrderData) => {
    try {
        const response = await fetch(`https://ecomsapp.herokuapp.com/api/order/create/${userId}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ order: createOrderData })
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};