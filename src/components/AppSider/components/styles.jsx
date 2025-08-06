import styled from "styled-components";
import { Layout } from "antd";

const {Sider} = Layout;

export const StyledSider = styled(Sider)`
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
  position: sticky;
  inset-inline-start: 0;
  top: 0;
  bottom: 0;
  scrollbar-width: thin;
  background-color: #1c2536;
  z-index: 12;

  .ant-layout-sider-trigger {
    background-color: #1c2536;
    max-width: 260px;
  }
  .ant-menu {
    border-inline-end: none !important;
    padding-bottom: 60px;
    background-color: #1c2536 !important;
  }

  .sider-logo {
    display: flex;
    padding: 16px;
    gap: 14px;
    align-items: center;
    p {
      color: white;
      font-weight: bold;
      font-size: 20px;
      margin: 0;
      span {
        display: block;
      }
    }
  }
`

export const ToggleSider = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  background: #1c2536;
  color: white;
  width: 100%;
`;

export const LabelUppercase = styled.span`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.65);
  transition: font-size 0.2s ease;

  .ant-layout-sider-collapsed & {
    font-size: 10px;
  }
`;

export const Label = styled.span`
  font-weight: 500;
`