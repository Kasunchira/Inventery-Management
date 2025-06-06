import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedRoute, AdminRoute } from "./service/Guard";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import SupplierPage from "./pages/SupplierPage.jsx";
import AddEditSupplierPage from "./pages/AddEditSupplierPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import AddEditProductPage from "./pages/AddEditProductPage.jsx";
import PurchasePage from "./pages/PurchasePage.jsx";
import SellPage from "./pages/SellPage.jsx";
import TransactionsPage from "./pages/TransactionsPage.jsx";
import TransactionDetailsPage from "./pages/TransactionDetailsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
//import Layout from "./component/Layout.jsx"; 
//import SideBar from "./component/SideBar.jsx";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>

        <Route path="/category" element={<AdminRoute element={<CategoryPage/>}/>}/>
        <Route path="/supplier" element={<AdminRoute element={<SupplierPage/>}/>}/>
        <Route path="/add-supplier" element={<AdminRoute element={<AddEditSupplierPage/>}/>}/>
        <Route path="/edit-supplier/:supplierId" element={<AdminRoute element={<AddEditSupplierPage/>}/>}/>
        <Route path="/product" element={<AdminRoute element={<ProductPage/>}/>}/>

        <Route path="/add-product" element={<AdminRoute element={<AddEditProductPage/>}/>}/>
        <Route path="/edit-product/:productId" element={<AdminRoute element={<AddEditProductPage/>}/>}/>

        <Route path="/purchase" element={<ProtectedRoute element={<PurchasePage/>}/>}/>
        <Route path="/sell" element={<ProtectedRoute element={<SellPage/>}/>}/>
        <Route path="/transaction" element={<ProtectedRoute element={<TransactionsPage/>}/>}/>
        <Route path="/transaction/:transactionId" element={<ProtectedRoute element={<TransactionDetailsPage/>}/>}/>

        <Route path="/profile" element={<ProtectedRoute element={<ProfilePage/>}/>}/>
        <Route path="/dashboard" element={<ProtectedRoute element={<DashboardPage/>}/>}/>



        <Route path="*" element={<LoginPage/>}/>


        

      </Routes>
    </Router>
  )
}

export default App;
