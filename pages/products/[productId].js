import axios from "axios";
import { useRouter } from "next/router";

const ProductComponent = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) return <p>loading...</p>;

  return (
    <p>
      {product.title} - {product.description} - price:{product.price}$
    </p>
  );
};

export default ProductComponent;

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { data } = await axios.get(`http://localhost:4000/product/${params.productId}`);
  console.log(`Incremental Static Regeneration / product/${params.productId}`);
  return {
    props: {
      product: data,
    },
    revalidate: 20,
  };
}
