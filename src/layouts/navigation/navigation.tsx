import * as React from "react";
import { useState } from "react";
import tw, { styled } from "twin.macro";

import Core from "./core";

export const ItemWrapper = styled.li`
  ${tw`pl-5`}
`;

export const ItemLink = styled.a`
  ${tw`px-3 py-2 flex items-center text-xs uppercase font-bold text-white hover:opacity-75`}
`;

export const ItemRow = styled.span`
  ${tw`mr-2`}
`;

type ItemProps = {
  children: React.ReactNode;
};

// Nav bar item
export function Item(props: ItemProps) {
  return (
    <ItemWrapper>
      <ItemLink href="#">
        <ItemRow>{props.children}</ItemRow>
      </ItemLink>
    </ItemWrapper>
  );
}

const HomeLink = styled.a`
  ${tw`text-sm inline-block mr-4 py-2 uppercase text-white`}
`;

const NavButton = styled.button`
  ${tw`text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none`}
`;

const Bars = styled.i`
  ${tw``}
`;

type Props = {
  children: React.ReactNode;
};

// Takes children, which contain the nav items themselves.
// Using the Item wrapper, exported from this file.
//       <Item>
//         <Link to="/create" exact>Create</Link>
//       </Item>
export default function Navigation(props: Props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <Core
      inner={
        <>
          <HomeLink>
            <a to="/" exact>
              Home
            </a>
          </HomeLink>
          <NavButton onClick={() => setNavbarOpen(!navbarOpen)}>
            <Bars />
          </NavButton>
        </>
      }
      navbarOpen={navbarOpen}
    >
      {props.children}
    </Core>
  );
}
