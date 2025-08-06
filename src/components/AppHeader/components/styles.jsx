import styled from "styled-components";
import { Layout } from "antd";

const { Header } = Layout;

export const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  top: 0;
  z-index: 11;
  background: #fff!important;

  @media (max-width: 768px) {
    padding-inline: 8px;
  }
`