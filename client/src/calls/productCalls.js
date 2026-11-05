import axios from "axios";
import { API_BASE_URL } from "./config.js";
const api = axios.create({
  baseURL: API_BASE_URL,
});
export const getProducts=async()=>{
 const products = await api.get("/api/products/getAllProducts");
 return products.data.products
}
export const addProducts=async(product)=>{
const productData=await api.post("/api/products/add-product",product);
return productData.data.product
}
export const updateProduct=async(id,productInfo)=>{
 const product=await api.put(`/api/products/update-product/${id}`,productInfo);
 return product.data.product;
}
export const deleteProduct=async(id)=>{
 const response=await api.delete(`/api/products/delete-product/${id}`);
 return response.data

}
export const searchProducts = async (key) => {
  const response = await api.get(
    `/api/products/search/${encodeURIComponent(key)}`
  );

  return response.data.products;
 }