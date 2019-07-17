export const PRODUCT = "Produto";
export const PRICE = "Preço";

export const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});
