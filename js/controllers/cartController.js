import { cartListView } from "../views/organisms/cartView.js"
import { Layout } from "./layoutController.js"

export const CartPage = () => {
  const html = cartListView()

  return Layout
}