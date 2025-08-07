import React from 'react';
import AppModal from '.';
import useAuth from '@/features/Auth/useAuth';
import useMediaQuery, {mediaQueryPoints} from '@/hooks/useMediaQuery';
import { StyledLogoutModal } from './components/styles';
import { LogOutIcon } from 'lucide-react';

function LogoutModal({ openModal, setOpenModal }) {
  const { logOutUser } = useAuth();
  const isMobile = useMediaQuery(`(max-width: ${mediaQueryPoints.md}px)`);
  return (
    <StyledLogoutModal
      open={openModal}
      onOk={logOutUser}
      onCancel={() => setOpenModal(false)}
      okText="Logout"
      cancelText="Cancel"
      okButtonProps={{ danger: true }}
      cancelButtonProps={{
        
      }}
      centered={isMobile}
    >
      <div className="modal-content">
        <div className='icon'>
          <LogOutIcon size={30} color="#ff4d4f" />
        </div>
        <h2>Sign out</h2>
        <p>Are you sure you want to sign out?</p>
      </div>
    </StyledLogoutModal>
  );
}

export default LogoutModal;
