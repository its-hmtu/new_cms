import React from "react";
import styled from "styled-components";

const ShadowCard = ({ children, className = "", title = "", icon = null }) => {
  return (
    <ContainerShadowCard className={`${className}`}>
      <span className="item-detail">
        {icon && <span className="item-icon">{icon}</span>}
        {title}
      </span>
      {children}
    </ContainerShadowCard>
  );
};

export default ShadowCard;

const ContainerShadowCard = styled.div`
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  border-radius: 8px;

  .item-detail {
    font-size: 20px;
  }

  .item-icon {
    margin: 15px 0;
  }
`;
