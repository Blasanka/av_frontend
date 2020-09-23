export class CartItem {
    public id: number;
    public product: any;
    public itemTotal: number;

    constructor(id: number, product: any, itemTotal: number) {
      this.id = id;
      this.product = product;
      this.itemTotal = itemTotal;
    }
  }
