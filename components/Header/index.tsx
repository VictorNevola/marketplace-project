import { Header, Wrapper, Main, ContainerFlex, MenuList, MenuLink } from './style';
import Link from 'next/link';

export const HeaderComponent = () => {

    return (
        <Header>
            <Wrapper> 
                <Main>
                    <ContainerFlex> 

                        <MenuList> 
                            <MenuLink> 
                                <Link href="/quadros">
                                    Quadros
                                </Link>
                            </MenuLink>

                            <MenuLink>
                                <Link href="/murais">
                                    Murais
                                </Link>
                            </MenuLink>

                            <MenuLink>
                                <Link href="/bio">
                                    Sobre
                                </Link>
                            </MenuLink>

                            <MenuLink>
                                <Link href="/contato">
                                    Contato
                                </Link>
                            </MenuLink>

                        </MenuList>

                    </ContainerFlex>
                </Main>
            </Wrapper>
        </Header>
    );

}