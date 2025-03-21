import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideDrawer from "./layout/SideDrawer";
import Footer from "./layout/footer";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import SubmitCommission from "./pages/SubmitCommission";
import { useDispatch } from "react-redux";
import { fetchLeaderboard, fetchUser } from "./store/slices/userSlice";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import { getAllAuctionItems } from "./store/slices/auctionSlice";
import Leaderboard from "./pages/Leaderboard";
import Auctions from "./pages/Auctions";
import AuctionItem from "./pages/AuctionItem";
import CreateAuction from "./pages/CreateAuction";
import ViewMyAuctions from "./pages/ViewMyAuctions";
import ViewAuctionDetails from "./pages/ViewAuctionDetails";
import Dashboard from "./pages/Dashboard/Dashboard";
import AdminSugCategories from "./pages/Dashboard/AdminSugCategories";
import AdminStats from "./pages/Dashboard/Stats";
import Contact from "./pages/Contact";
import UserProfile from "./pages/UserProfile";
import ForgotPassword from "./pages/ForgotPassword";
import SuggestCategoryPage from "./pages/SuggestCategory";
import ResetPassword from "./pages/ResetPassword";
import ChangePassword from "./pages/ChangePassword";
import ReportForm from "./pages/ReportForm";
import AdminReportsPage from "./pages/Dashboard/AllReports"; 
import SellerProfile from "./pages/SellerProfile"; 
import Wishlist from "./pages/WishList";

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(getAllAuctionItems());
    dispatch(fetchLeaderboard());
  }, []);
  
  return (
    <Router>
      <SideDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/submit-commission" element={<SubmitCommission />} />
        <Route path="/how-it-works-info" element={<HowItWorks />} />
        <Route path="/about" element={<About />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/auctions" element={<Auctions />} />
        <Route path="/auction/item/:id" element={<AuctionItem />} />
        <Route path="/create-auction" element={<CreateAuction />} />
        <Route path="/view-my-auctions" element={<ViewMyAuctions />} />
        <Route path="/suggest-category" element={<SuggestCategoryPage />} />
        <Route path="/auction/details/:id" element={<ViewAuctionDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-stats" element={<AdminStats />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/me" element={<UserProfile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/seller/:id" element={<SellerProfile />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/category-suggestions" element={<AdminSugCategories />} />
        <Route path="/report-auction/:auctionId" element={<ReportForm />} />
        <Route path="/all-reports" element={<AdminReportsPage />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-right" />
    </Router>
  );
};

export default App;
