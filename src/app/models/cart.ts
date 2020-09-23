import { CartItem } from './CartItem';

export class Cart {
    public id: number;
    public cartItems: CartItem[];
    public productTotal: number;
    public subTotal: number;
    public shippingCost: number;
    public flatRate: number;
    public cartTotal: number;

    constructor(id: number, cartItems: any[], subTotal: number, shippingCost: number, flatRate: number) {
      this.id = id;
      this.cartItems = cartItems;
      this.subTotal = subTotal;
      this.shippingCost = shippingCost;
      this.flatRate = flatRate;
      this.cartTotal = subTotal - flatRate + shippingCost;
    }
  }
