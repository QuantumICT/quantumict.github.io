import { Outlet } from "react-router-dom";
import { Header } from "@/components/generated/Header";
import { Footer } from "@/components/generated/Footer";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
