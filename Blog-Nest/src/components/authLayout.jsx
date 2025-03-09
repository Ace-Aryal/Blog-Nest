import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function Protected({ children, authenicatioin = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState();
  const authStatus = useSelector((state) => state.auth.status);
  useEffect(() => {
    if (authenicatioin && authenicatioin !== authStatus) {
      navigate("/login");
      return;
    }
    if (!authenicatioin && authenicatioin !== authStatus) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authenicatioin]);

  return lloader ? <p>Loading...</p> : <>{children}</>;
}
