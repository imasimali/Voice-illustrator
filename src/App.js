import { Route, Routes } from "react-router-dom";
import React from "react";
import LoginForm from "./components/Login/LoginForm";
import SignUp from "./components/SignUp/SignUp";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import SpeechtoImage from "./components/SpeechtoImage/SpeechtoImage";
import NavBar from "./components/NavBar/NavBar";
import MyCreation from "./components/MyCreation/MyCreation";
import Options from "./components/options/Options";
import StyleTransfer from "./components/style-transfer/StyleTransfer";
import HomePage from "./components/HomePage/HomePage";
import ImageCaptioning from "./components/ImageCaptioning/ImageCaptioning";
import Gallery from "./components/gallery/Gallery";
import MyProfile from "./components/MyProfile/MyProfile";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/SpeechtoImage" element={<SpeechtoImage />} />
        <Route path="/NavBar" element={<NavBar />} />
        <Route path="/MyCreation" element={<MyCreation />} />
        <Route path="/Options" element={<Options />} />
        <Route path="/StyleTransfer" element={<StyleTransfer />} />
        <Route path="/ImageCaptioning" element={<ImageCaptioning />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/myProfile" element={<MyProfile />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
      {/* <LoginForm />
      <SignUp />
      <ForgotPassword />
      <NavBar/>
      <HomePage/> */}
    </React.Fragment>
  );
}

export default App;
