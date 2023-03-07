import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch: logoutDispatch } = useAuthContext();
  const logout = () => {
    //clear localstro
    localStorage.removeItem("user");
    //dispatch
    logoutDispatch({ type: "LOGOUT" });
  };
  return { logout };
};
