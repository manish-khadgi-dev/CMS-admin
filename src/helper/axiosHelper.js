import axios from "axios";
const apiRoot = process.env.REACT_APP_ROOT_API;
const adminAPI = apiRoot + "/admin";
const catAPI = apiRoot + "/category";

export const axiosProcessor = async ({ url, method, objDt }) => {
  try {
    const { data } = await axios({
      method,
      url,
      data: objDt,
    });
    return data;
  } catch (error) {
    return {
      status: error,
      message: error.message,
    };
  }
};

// ====== admin users
export const postAdminUser = async (objDt) => {
  const obj = {
    method: "post",
    url: adminAPI,
    objDt,
  };
  return axiosProcessor(obj);
};

export const verifyAdminUser = async (objDt) => {
  const obj = {
    method: "post",
    url: adminAPI + "/verify-email",
    objDt,
  };
  return axiosProcessor(obj);
};

export const fetchAdminLogin = async (objDt) => {
  const obj = {
    method: "post",
    url: adminAPI + "/login",
    objDt,
  };
  return axiosProcessor(obj);
};

export const fetchReqOtp = (objDt) => {
  const obj = {
    method: "post",
    url: adminAPI + "/request-otp",
    objDt,
  };
  return axiosProcessor(obj);
};

export const fetchResetPassword = (objDt) => {
  const obj = {
    method: "patch",
    url: adminAPI + "/reset-password",
    objDt,
  };
  return axiosProcessor(obj);
};

// ====== category

export const fetchCategories = async () =>
  axiosProcessor({
    method: "get",
    url: catAPI,
  });

export const postCategory = async (objDt) => {
  const obj = {
    method: "post",
    url: catAPI,
    objDt,
  };
  return axiosProcessor(obj);
};

export const updateCategory = async (objDt) => {
  const obj = {
    method: "put",
    url: catAPI,
    objDt,
  };
  return axiosProcessor(obj);
};

export const deleteCategory = async (_id) => {
  const obj = {
    method: "delete",
    url: catAPI + "/" + _id,
  };
  return axiosProcessor(obj);
};
