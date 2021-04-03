import {
  Header,
  Wrapper,
  Main,
  ContainerFlex,
  MenuList,
  MenuLink,
  Logo
} from "./style";
import Link from "next/link";
import Image from "next/image";

export const HeaderComponent = () => {
  return (
    <Header>
      <Wrapper>
        <Main>
          <ContainerFlex>

            <Link href="/">
              <Logo> 
                <Image
                  src="/images/logo.jpeg"
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
              </Logo>
            </Link>


            <MenuList>

              <MenuLink>
                <Link href="/sobre">Sobre</Link>
              </MenuLink>

              <MenuLink>
                <Link href="/imprensa">Imprensa</Link>
              </MenuLink>

              <MenuLink>
                <Link href="/contato">Contato</Link>
              </MenuLink>

              <MenuLink>
                <Link href="/loja">Loja</Link>
              </MenuLink>
              
            </MenuList>
          </ContainerFlex>
        </Main>
      </Wrapper>
    </Header>
  );
};
