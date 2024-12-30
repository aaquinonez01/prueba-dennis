import { Route, Routes } from "react-router-dom";
import { BooksPage } from "../pages/BooksPage";
import { HomePage } from "../pages/HomePage";
import { BookDetailPage } from "../pages/BookDetailPage";
import {CheckoutPage} from "../pages/CheckoutPage";
import { LandingPage } from "../pages/LandingPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/books/:id" element={<BookDetailPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
};
