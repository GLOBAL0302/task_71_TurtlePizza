export interface IDishForm {
  title: string;
  price: number;
  imageUrl: string;
}

export interface IDishFormApi {
  [id: string]: IDishForm;
}

export interface IDishState extends IDishForm {
  id: string;
}

export interface IDishCart {
  dish: IDishState;
  amount: number;
}

export interface IDishOrders {
  dish: IDishForm;
  amount: number;
}

export interface IOrderState {
  [key: string]: number;
}

export interface IOrders {
  orderId: string;
  ordersInfo: IOrderState[];
}
