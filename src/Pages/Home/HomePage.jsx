import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Products from "./components/Products";
import VIP from "./components/VIP";
import Motions from "./components/Motions";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      <Header />
      <Services />
      <Products />
      <VIP />
      <Motions />
      <Articles />
      <Footer />
    </div>
  );
}
