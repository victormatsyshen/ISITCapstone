//Import base react
import "./assets/styles/App.css";
import { Single } from "./firebase/Single";
import Footer from "./components/page_components/Footer";
import Nav from "./components/page_components/Nav";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import QRPage from "./pages/QRPage";
import SignupUI from "./components/object_components/SignupUI";
import LoginUI from "./components/object_components/LoginUI";
import MobileHeader from "./components/page_components/MobileHeader";
import MobileNav from "./components/page_components/MobileNav";
import DisplayItem from "./pages/DisplayPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import Carousel from "./components/object_components/Carousel";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     setTimeout(() => {
//       window.location.href = "http://localhost:3000/Signup";
//     }, 10000);
//   }
// });

function App() {
  return (
    <div>
      {/* Browser View */}
      <BrowserView>
        <Nav />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/map/*" element={<MapPage />} />
          <Route exact path="/signup" element={<SignupUI />} />
          <Route exact path="/login" element={<LoginUI />} />
        </Routes>
        <Footer />
      </BrowserView>

      {/* Mobile View */}
      <MobileView>
        <MobileHeader />
        <Routes>
          <Route exact path="/" element={<DisplayItem />} />
          <Route exact path="/home" element={<DisplayItem />} />
          <Route exact path="/map/*" element={<MapPage />} />
          <Route exact path="/qr" element={<QRPage />} />
          <Route exact path="/signup" element={<SignupUI />} />
          <Route exact path="/login" element={<LoginUI />} />
        </Routes>
        <MobileNav />
      </MobileView>
    </div>
  );
}

export default App;
