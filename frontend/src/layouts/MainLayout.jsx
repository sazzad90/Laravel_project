import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Loader from '../utilities/Loader'
const MainLayout = ({ children }) => {
  const loadingStatus = useSelector((state) => state.auth.isLoading);

  useEffect(()=>{
  },[loadingStatus])

  return (
    <>
      <div className={'App'} >
        <>
        <>{children}</>
        {loadingStatus ? <Loader/> : null}
        </>
      </div>
    </>
  );
};

export default MainLayout;
