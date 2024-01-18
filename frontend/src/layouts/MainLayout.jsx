import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <>
      <div className={'App'}>
        <>{children}</>
      </div>
    </>
  );
};

export default MainLayout;
