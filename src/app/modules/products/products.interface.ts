export type Tvariants={
    type:string;
    value:string;
}
export type Tinventory={
    quantity:number;
    inStock :true;
}
export type TProduct={
    name:string;
    description :string;
    price :number;
    category :string;
    tags :string[];
    variants :Tvariants[];
    inventory:Tinventory;
}