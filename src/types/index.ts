export type ProductType = {
  id: number;
  SKU: string;
  name: string;
  brandName: string;
  mainImage: string;
  price: {[key: string]: string};
  sizes: Array<string>;
  stockStatus: boolean;
  colour: string;
  description: string;
};

export type ProductsStateType = {
  isLoading: boolean;
  data: Array<ProductType> | [];
  isError: boolean;
};

export type CartStateType = {
  id: number;
  itemCount: number;
};
