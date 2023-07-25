
import { TResSuccess } from "../interfaces/common.type";
import {
  IProduct,
  TQueryParamsProduct,
  TResListProductData,
} from "../interfaces/product.type";
import instance from "./config";

export const getProducts = (params: TQueryParamsProduct) =>
  instance.get<TResSuccess<TResListProductData>>("/products", { params });
export const getProduct = (id: string) =>
  instance.get<TResSuccess<IProduct>>(`/products/${id}`);
export const createProduct = (data: IProduct) =>
  instance.post<TResSuccess<IProduct>>("/products", data);
export const updateProduct = (id: string, data: Omit<IProduct, "_id">) =>
  instance.patch<TResSuccess<IProduct>>(`/products/${id}`, data);
export const deleteProduct = (id: string) =>
  instance.delete<TResSuccess<IProduct>>(`/products/${id}`);
