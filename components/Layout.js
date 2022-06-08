import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Nav />
      <main
        style={{ minHeight: "calc(100vh - 492px)" }}
        className=" flex-grow  "
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
