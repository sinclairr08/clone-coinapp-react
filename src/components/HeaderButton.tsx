import styled from "styled-components";

export const HeaderBtn = styled.button<{ isInVisible?: boolean }>`
  background-color: ${(props) => props.theme.componentColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 10px;
  border: none;
  padding: 5px 10px;

  visibility: ${(props) => (props.isInVisible ? "hidden" : "false")};

  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;
