import { useAuthContext } from "./useAuthContext";
import { useProjectsContext } from "./useProjectContext";
export const useLogout = () => {
  const { dispatch: logoutDispatch } = useAuthContext();
  const { dispatch: projectsDispatch } = useProjectsContext();
  const logout = () => {
    //clear localstro
    localStorage.removeItem("user");
    //dispatch
    logoutDispatch({ type: "LOGOUT" });
    projectsDispatch({ type: "SET_PROJECT", payload: [] });
  };
  return { logout };
};
