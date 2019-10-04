import React from 'react';

const Categoria = ({ children }) => (
  <div>
    <h3 className='categories__title'>Mi lista</h3>
    {children}
  </div>
);

export default Categoria;
