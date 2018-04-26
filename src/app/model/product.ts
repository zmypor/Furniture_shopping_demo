export type ProductColor = 'blue' | 'green' | 'gray' | 'red'| 'brown'| 'black' | 'dark-brown';

export interface Product {
  id?: number;
  name?: string;
  price?: number;
  currency?: string;
  colors?: ProductColor[];
  imageUrl?: string;
  description?: string;
}

export interface ProductFilter {
  color?: ProductColor;
}
