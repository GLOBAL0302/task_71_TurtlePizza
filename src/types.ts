export interface dishForm{
  title:string
  price:number
  imageUrl:string
}

export interface dishFormApi{
  [id:string]:dishForm
}

export interface dishState extends dishForm{
  id:string
}
