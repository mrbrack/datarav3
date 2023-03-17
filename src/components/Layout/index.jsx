import { Navbar, Footer } from "@/components";

export default function Layout(children) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
