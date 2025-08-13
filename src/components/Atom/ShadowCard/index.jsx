import React from "react";

const ShadowCard = ({ children, style = {}, className = "", title= "", icon = null }) => {
  return (
    <div
      className={className}
      style={{
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        margin:"10px",
        borderRadius: "8px",
        ...style,
      }}
    >
      <span style={{ fontSize: 20}}>
        {icon && <span style={{ margin: "15px 15px 0px 0px",  }}>{icon}</span>}
        {title}
      </span>
      {children}
    </div>
  );
};

export default ShadowCard;
