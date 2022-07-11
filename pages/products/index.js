import axios from "axios";
import { useRouter } from "next/router";
const ProductsPage = ({ productList }) => {
  const router = useRouter();

  return (
    <div>
      {productList.map((item) => {
        return (
          <h3 key={item.id} onClick={() => router.push(`/products/${item.id}`)}>
            product name: {item.title} - {item.price}
          </h3>
        );
      })}
    </div>
  );
};

export default ProductsPage;

export async function getStaticProps() {
  const { data } = await axios.get("http://localhost:4000/product");
  console.log("Incremental Static Regeneration / product");
  return {
    props: {
      productList: data,
    },
    revalidate: 20,
  };
}
