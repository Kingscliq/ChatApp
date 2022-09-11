import React, { ReactNode } from 'react';

const Card: React.FC<{ children: ReactNode }> = ({ children }) => {
    return <section className="bg-white w-[400px] p-6 shadow-sm">{children}</section>;
};

export default Card;
