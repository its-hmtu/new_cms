import React from 'react';
import AppModal from '.';
import useAuth from '@/features/Auth/hooks/useAuth';

function LogoutModal({ openModal, setOpenModal }) {
  const { logOutUser } = useAuth();
  return (
    <AppModal
      open={openModal}
      onOk={logOutUser}
      onCancel={() => setOpenModal(false)}
      okText="Logout"
      cancelText="Cancel"
    >
      <div className="p-5 flex items-center flex-col gap-2">
        <h1 className="font-bold text-3xl">Logout</h1>
        <p>Are you sure you want to logout?</p>
      </div>
    </AppModal>
  );
}

export default LogoutModal;
