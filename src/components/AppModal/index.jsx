import { Modal } from 'antd';
import React, { useEffect } from 'react';

function AppModal({ children, open, ...props }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);
  
  return (
    <Modal maskClosable={false} open={open} {...props}>
      {children}
    </Modal>
  );
}

export default AppModal;
