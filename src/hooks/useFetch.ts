import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";


export interface ProductList {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string
}

const fetchProducts = async (filter:string) => {
    let url = filter ? `https://fakestoreapi.com/products/category/${filter}` :'https://fakestoreapi.com/products'
    const res = await axios.get(url);
    return res.data;
};

export const useFetch = (filter: string): UseQueryResult<ProductList[]> => {
    return useQuery({
        queryKey: ["products", filter],
        queryFn: () => fetchProducts(filter),
        staleTime: 5 * 60 * 1000,
    });
};