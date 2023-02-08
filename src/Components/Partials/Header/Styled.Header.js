import styled from "styled-components";

export const HeaderStyled = styled.header`
  grid-area: header;

  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    position: absolute;
    top: 0;
  }
`;
