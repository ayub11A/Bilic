import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ Context Providers
import { SearchProvider } from "./context/SearchContext";
import { CartProvider } from "./context/Cartcontext";

// ✅ Layout Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// ✅ Pages
import Home from "./pages/Home";
import BabyFurniture from "./pages/Babyfurniture";
import BabyShower from "./pages/Babyshower";
import ContactUs from "./pages/ContactUs";
import BoysUnderage from "./pages/BoysUnderage"
import GirlsNewbornPage from "./pages/GirlsNewbornPage";
import GirlsUnderAge from "./pages/GirlsunderAge";
import Cars from "./pages/Cars";
import NewbornList from "./components/NewbornList";
import SearchResults from "./pages/SearchResults";
import Cartpage from "./pages/Cartpage";
import ManualPayment from "./pages/Frontend/Manualpayment"; // ✅ Payment page

function App() {
  return (
    <SearchProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-gray-50">
          {/* ✅ Header joogto ah */}
          <Header />

          {/* ✅ Main content */}
          <main className="flex-grow pt-24 px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Babyfurniture" element={<BabyFurniture />} />
              <Route path="/Babyshower" element={<BabyShower />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/Newborn" element={<NewbornList />} />
              <Route path="/BoysUnderage" element={<BoysUnderAge />} />
              <Route path="/GirlsNewborn" element={<GirlsNewbornPage />} />
              <Route path="/GirlsunderAge" element={<GirlsUnderAge />} />
              <Route path="/SearchResults" element={<SearchResults />} />
              <Route path="/Cartpage" element={<Cartpage />} />
              <Route path="/Cars" element={<Cars />} />
              <Route path="/manualpayment" element={<ManualPayment />} />
            </Routes>
          </main>

          {/* ✅ Footer joogto ah */}
          <Footer />
        </div>

        {/* ✅ Toast container (hal mar oo global ah) */}
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          theme="colored"
        />
      </CartProvider>
    </SearchProvider>
  );
}

export default App;
