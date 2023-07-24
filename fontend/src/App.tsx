import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Home from "./pages/Home";


import ProductDetail from "./pages/ProductDetail";

import ProductsAdmin from "./pages/admin/ProductsAdmin";
import CategoriesAdmin from "./pages/admin/CategoriesAdmin";

import MainLayout from "./layout";
import AdminLayout from "./layout/AdminLayout";
import UsersAdmin from "./pages/admin/UserAdmin";
import { getProfileFromLS } from "./utils";
import NotFoundPage from "./pages/NotFound";
import SignupPage from "./pages/Signup";
import { Login } from "./pages/Login";

function App() {
  const profile = getProfileFromLS();

  function AdminWrapper() {
    return profile.user.role === "admin" ? <Outlet /> : <Navigate to="/" />;
  }

  return (
    <Routes>
      <Route path="/">
        <Route
          index element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        ></Route>
        <Route   path="products/:id"  element={
            <MainLayout>
              <ProductDetail />
            </MainLayout>
          }
        ></Route>
        <Route path="signin" element={<Login />}></Route>
        <Route path="signup" element={<SignupPage />}></Route>
      </Route>
      <Route element={<AdminWrapper />}>
       
     
        <Route
          path="admin/products"  element={
            <AdminLayout>
              <ProductsAdmin />
            </AdminLayout>
          }
        />
        <Route
          path="admin/categories" element={
            <AdminLayout>
              <CategoriesAdmin />
            </AdminLayout>
          }
        />
        <Route
          path="admin/users" element={
            <AdminLayout>
              <UsersAdmin />
            </AdminLayout>
          }
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
