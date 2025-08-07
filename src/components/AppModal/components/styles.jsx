import styled from "styled-components";
import AppModal from "..";

export const StyledLogoutModal = styled(AppModal)`
  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      color: #6c737f;
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: rgba(255, 77, 79, 0.1);
      color: #ff4d4f;
      margin-bottom: 10px;
    }
  }

  .ant-modal-footer {
    display: flex;
    justify-content: center;
    gap: 10px;

    button {
      margin: 0 !important;
      width: 50%;
      min-height: 40px;
      font-weight: 500;
    }
  }
`;
