import {RouteProp} from '@react-navigation/native';

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
  totalAmount: number;
};

//Component Types

export type AppHeaderComType = {title: string; backButton: boolean};

export type AppContainerComType = {
  route: RouteProp<{params: AppHeaderComType}>;
  children: React.ReactNode;
};

export type ProductItemComType = {
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
