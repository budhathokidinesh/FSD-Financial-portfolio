import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
export const DefaultLayout = () => {
  return (
    <div>
      {/* nav bar  */}
      <Header />
      {/* actual page ontent  */}
      <main className="main">
        <Outlet />
      </main>

      {/* footer  */}
      <Footer />
    </div>
  );
};
