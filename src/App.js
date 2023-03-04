import "./App.css";

import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import Registration from "./pages/register/Registration";
import LoginPage from "./pages/login/LoginPage";
import EmailVerify from "./pages/verify/EmailVerify";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/dashboard/Dashboard";
import ResetPassword from "./pages/reset-password/ResetPassword";
import Category from "./pages/category/Category";
import Products from "./pages/products/Products";
import Orders from "./pages/orders/Orders";
import PaymentOptions from "./pages/payment-options/PaymentOptions";
import Customers from "./pages/customers/Customers";
import Setting from "./pages/setting/Setting";

function App() {
  return (
    <div className="">
      <Browser>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<LoginPage />} />
          <Route path="register" element={<Registration />} />
          <Route path="verify" element={<EmailVerify />} />
          <Route path="reset-password" element={<ResetPassword />} />

          {/* private routs */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="category" element={<Category />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="payment-options" element={<PaymentOptions />} />
          <Route path="customers" element={<Customers />} />
          <Route path="setting" element={<Setting />} />
        </Routes>
      </Browser>
      <ToastContainer />
    </div>
  );
}

export default App;
