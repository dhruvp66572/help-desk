import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "./../components/Footer";

export default function MainLayout({ role }) {
  return (
    <div className="flex h-screen">
      <Sidebar role={role} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto bg-cleanWhite">
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
