// export class Product {
//     id: number;
//     imageURL1: string;
//     imageURL2:string;
//     productName: string;
//     description:string;
//     price: number;
//     priceWithDiscount: number;
//     supplier: string;

//     constructor(id, imageURL1, imageURL2, productName, description= 'test description ', price = 0, priceWithdiscount = 0,supplier){
//         this.id = id
//         this.imageURL1 = imageURL1
//         this.imageURL2 = imageURL2
//         this.productName = productName
//         this.description = description
//         this.price = price
//         this.priceWithDiscount = priceWithdiscount
//         this.supplier = supplier
//     }
// }
export interface Product {
    id: number;
    imageURL1: string;
    imageURL2: string;
    product_name: string;
    description: string;
    price: number;
    priceWithDiscount: number;
    supplier: string;
}

