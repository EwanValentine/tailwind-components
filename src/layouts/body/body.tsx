import * as React from "react";
import tw from "twin.macro";
import styled from "twin.macro/types";

const Container = tw.div`container`;

type Props = {
  children: React.ReactNode;
};

function Body(props: Props): React.ReactNode {
  return <Container>{props.children}</Container>;
}

export default Body;
