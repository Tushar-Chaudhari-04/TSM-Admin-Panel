export interface OrderItemType{
   name:string,
   photo:string,
   price:number,
   quantity:number,
   _id:string
}

export interface OrderType{
   name:string,
   address:string,
   city:string,
   state:string,
   pinCode:number,
   country:string,
   status:"Processing" | "Shipped" | "Delivered" | "Cancelled",
   subtotal:number,
   discount:number,
   shippingCharges:number,
   tax:number,
   total:number,
   orderItems:OrderItemType[];
   _id:string
}