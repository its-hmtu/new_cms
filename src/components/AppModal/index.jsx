import { Modal } from 'antd';
import React from 'react';

function AppModal({ children, ...props }) {
  return (
    <Modal maskClosable={false} {...props}>
      {children}
    </Modal>
  );
}

export default AppModal;
