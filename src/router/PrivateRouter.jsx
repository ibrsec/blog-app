import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { toastInfo } from '../helper/ToastNotify';

const PrivateRouter = () => {
    const currentUserToken = useSelector(state=> state.auth?.token);
    currentUserToken || toastInfo("You must login first!!")
  return currentUserToken ? <Outlet /> : <Navigate to="/login"/>
}

export default PrivateRouter