import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../features/authSlice";
import { Button } from "@mantine/core";

function LogoutButton({}) {
  const dispatch = useDispatch();
  function logoutHandler() {
    authService.logout().then(() => dispatch(logout()));
  }
  return (
    <Button variant="filled" color="red">
      Button
    </Button>
  );
}

export default LogoutButton;
