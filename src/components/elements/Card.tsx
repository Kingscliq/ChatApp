import React, { ReactNode } from 'react';

const Card: React.FC<{ children: ReactNode }> = ({ children }) => {
    return <section className="bg-white p-6 shadow-sm">{children}</section>;
};

export default Card;
