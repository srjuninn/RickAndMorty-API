import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 100dvw;
  height: 53px;
  background-color: var(--color-primary);

  a {
    font-size: 20px;
    font-weight: bold;
    color: var(--color-black);
    transition: all 0.3s ease; /* transição suave */
  }

  a:hover {
    text-decoration: underline;
  }
`
