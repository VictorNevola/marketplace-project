import Image from 'next/image';

import { product } from "./types";
import { Article, Title, Info, Price, PriceOld, PriceNew, PriceInstallments, StrongInstallments, ViewDetails } from "./style";

export const ProductCard = ({ name, newPrice, oldPrice, images, openQuickCart, refID }: product) => {
  return (
    <Article>
      <Image
        src={images[0]}
        alt={name}
        width={300}
        height={300}
        objectFit="contain"
      />
      <Title> 
        {name}
      </Title>
      <Info> 
        a partir de
      </Info>
      <Price> 
        <PriceOld> {oldPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </PriceOld>
        <PriceNew> {newPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </PriceNew>
      </Price>

      <PriceInstallments> 
        até <StrongInstallments>5x</StrongInstallments> de <StrongInstallments>{(newPrice / 5).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</StrongInstallments>
      </PriceInstallments>

      <ViewDetails onClick={() => {openQuickCart(refID)}}> 
        Ver detalhes
      </ViewDetails>

    </Article>
  );
};
