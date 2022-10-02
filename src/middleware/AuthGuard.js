import { useDispatch, useSelector } from "react-redux";
import { profileInfoAccount, clearStateAccount } from "../redux/actions/accountActions.js";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const AuthGuard = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const accountInfo = useSelector((state) => state.account.info);
  const accountError = useSelector((state) => state.account.error);

  useEffect(() => {
    dispatch(profileInfoAccount());
  }, []);

  useEffect(() => {
    setLoading(accountInfo?.success);
  }, [accountInfo]);

  if (accountError === 401) {
    dispatch(clearStateAccount());
    return <Navigate to="/login" />;
  }

  return loading === true && <Outlet />;
};

export default AuthGuard;
