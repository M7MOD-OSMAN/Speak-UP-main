import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useEffect, useState } from "react";

export default function Layout() {
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname.includes("/admin") ||
      location.pathname.includes("/login")
    ) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [location]);

  return (
    <div>
      {!isAdmin ? (
        <div>
          <Navbar />
        </div>
      ) : (
        <></>
      )}
      <Outlet />
      <Footer />
    </div>
  );
}
