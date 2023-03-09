// http://mywebsite.com/users
// http://mywebsite.com/products

interface Result<T> {
    data: T | null;
    error: string | null;
}

function fetch<T>(url: string): Result<T> {
    console.log('url: ', url);
    return { data: null, error: null };
}

interface User {
    user: string;
}

interface Product {
    title: string;
}

let result = fetch<Product>('url');
result.data?.title;
