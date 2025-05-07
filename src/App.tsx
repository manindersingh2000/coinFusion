import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutStack from "./pages/AboutStack";
import Banner from "./pages/Banner";
import BuildWithStacks from "./pages/BuildWithStacks";
import StackingIntro from "./pages/StackingIntro";
import StackUnleashed from "./pages/StackUnleashed";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <StackingIntro />
      <StackUnleashed />
      <BuildWithStacks />
      <AboutStack />
      <Footer />
    </>
  );
}

export default App;
