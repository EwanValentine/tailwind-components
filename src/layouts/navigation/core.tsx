import * as React from "react";
import tw, { styled } from "twin.macro";

const NavBarRow = styled.div`
  ${tw`lg:flex flex-grow items-center`}
  ${(props) => (props.navbarOpen ? tw`flex` : tw`hidden`)}
`;

const NavBarList = styled.ul`
  ${tw`flex flex-row`}
`;

const Nav = styled.nav`
  ${tw`w-screen bg-gray-600 p-5`}
`;

const NavInnerWrapper = styled.div`
  ${tw`flex justify-between`}
`;

const NavInnerContainer = styled.div`
  ${tw`w-screen relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start`}
`;

type Props = {
  inner: React.ReactNode;
  children: React.ReactNode;
  navbarOpen: boolean;
};

function Core(props: Props): React.ReactNode {
  return (
    <Nav>
      <NavInnerWrapper>
        <NavInnerContainer>{props.inner}</NavInnerContainer>
        <NavBarRow navbarOpen={props.navbarOpen}>
          <NavBarList>{props.children}</NavBarList>
        </NavBarRow>
      </NavInnerWrapper>
    </Nav>
  );
}

export default Core;
