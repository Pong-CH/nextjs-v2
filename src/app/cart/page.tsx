import ProductCartComponent from "@/components/cart/ProductCartComponent";
import ProductListComponent from "@/components/cart/ProductListComponent";



export default function CardPage() {
  return (
    <div className="container flex gap-3 mx-auto ">
    <ProductCartComponent/>

    <ProductListComponent/>
    </div>
  )
}
