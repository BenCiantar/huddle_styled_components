import styled from "styled-components";

export const StyledHeader = styled.header`
  // Accessing prop passed into component
  //   background-color: ${(props) => props.pg};

  // Can also be destructured
  //   background-color: ${({ bg }) => bg};

  // Using theme
  //   background-color: ${({ theme }) => theme.colors.header};

  padding: 40px 0;

  //   Nested styles
  //   h1 {
  //     color: red;
  //   }

  // State styling
  //   &:hover {
  //     background-color: black;
  //   }
`;
