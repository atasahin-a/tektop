import { products } from "./product";
import { efsanelerProducts } from "./efsanelerProducts";
import { kupaProducts } from "./kupaProducts";
import { altlikProducts } from "./altlik";
import { ozelTshirtProducts } from "./tshirtProducts";
import { bezCantaProducts } from "./databezcantaProducts";

export const allProducts = [
  ...products,
  ...efsanelerProducts,
  ...kupaProducts,
  ...altlikProducts,
  ...ozelTshirtProducts,
  ...bezCantaProducts,
];