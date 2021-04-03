import { Wrapper, ContainerProducts, TitleCarrouselProducts } from "./style";
import { CarrouselProducts } from "../../components/CarrouselProducts";
import ProductsPromptDeveliry from "../../data/products-prompt-delivery.json";

function Loja({ ProductsPromptDeveliry }) {
  return (
    <Wrapper>
      <ContainerProducts>
        <TitleCarrouselProducts>Pronta Entrega</TitleCarrouselProducts>
        <CarrouselProducts products={ProductsPromptDeveliry} />
      </ContainerProducts>
    </Wrapper>
  );
}

Loja.getInitialProps = async () => {
  return {
    ProductsPromptDeveliry: ProductsPromptDeveliry,
  };
};


export default Loja