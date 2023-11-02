import Footer from "../home/Footer";
import HomeOutlet from "../home/HomeOutlet";
import HomeNavbar from "../navigation/Navbar";

const HomeLayout = () => {
  return (
    <>
      <HomeNavbar />
      <HomeOutlet />
      <Footer />
    </>
  );
};
export default HomeLayout;
