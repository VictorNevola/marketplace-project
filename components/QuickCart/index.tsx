import { Modal, ModalContainer, Images, Infos, Title, SpanInfo, Price, PriceOld, PriceNew, Description, SmallInfo, PriceInstallments, PriceInstallmentsStrong, BtnBuy, BtnClose } from './styles';
import { BannerFullWidth } from '../BannerFull';
import { PropsQuickCart } from './types';

export const QuickCart = ({ images, isActive, infos, closeQuickCart }: PropsQuickCart) => {

    return (
        <Modal active={isActive}>
            <ModalContainer>

                <BtnClose onClick={() => closeQuickCart()}> X </BtnClose>

                <Images>
                    <BannerFullWidth fullWidth={false} arrowsActive={false} images={images} />
                </Images>

                <Infos>

                    <Title>{infos.name}</Title>
                    <SpanInfo> a partir de </SpanInfo>

                    <Price>
                        <PriceOld> {infos.oldPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} </PriceOld>
                        <PriceNew> {infos.newPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} </PriceNew>
                    </Price>

                    <PriceInstallments>
                        até <PriceInstallmentsStrong>5x</PriceInstallmentsStrong> de <PriceInstallmentsStrong>{(infos.newPrice / 5).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</PriceInstallmentsStrong>
                    </PriceInstallments>

                    <Description>
                        {infos.description}
                    </Description>

                    <SmallInfo>
                        Ao clicar em comprar, você será direcionado ao WhatsApp do Vendedor para dar continuidade.
                    </SmallInfo>


                    <BtnBuy>
                        Comprar
                    </BtnBuy>

                </Infos>

            </ModalContainer>
        </Modal>
    )
}