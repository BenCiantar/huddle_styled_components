import { StyledHeader } from "./styles/Header.styled";

export default function Header() {
  return (
    // Passing prop into component
    <StyledHeader bg="red">
      <h1>Hubble</h1>
    </StyledHeader>
  );
}
