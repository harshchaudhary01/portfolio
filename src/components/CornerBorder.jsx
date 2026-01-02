import React from 'react';

const CornerBorder = ({title}) => {
  return (
    <div className="corner-border mt-8 text-[#D4D4D4] font-bold bg-[#18181B] text-sm">
      <span>{title}</span>
    </div>
  );
};

export default CornerBorder;