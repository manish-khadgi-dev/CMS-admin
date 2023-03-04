import { fetchAdminLogin } from "../../helper/axiosHelper";
import { setUser, unSetUser } from "./adminUserSlic";
import { toast } from "react-toastify";

export const loginAdmin = (frmDt) => async (dispatch) => {
  //call axios to check if login is success
  const resultPromise = fetchAdminLogin(frmDt);
  toast.promise(resultPromise, {
    pending: "Please wait ...",
  });
  const { status, message, admin } = await resultPromise;

  //show react toastify
  toast[status](message);

  // if login successful then we would receive user data which we need to send to state by using dispatch
  admin?._id && dispatch(setUser(admin));
};
