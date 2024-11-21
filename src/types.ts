export interface IDishForm {
  title:string
  price:number
  imageUrl:string
}

export interface IDishFormApi {
  [id:string]:IDishForm
}

export interface IDishState extends IDishForm{
  id:string
}


export interface IDishCart{
  dish:IDishState,
  amount:number
}
