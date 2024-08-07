import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Portfolio from "./Portfolio";
import Team from "./Team";
import Contact from "./Contact";
import Footer from "./Footer";

export default function MainPageLink() {
  return (
    <>
      <>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Team />
          <Contact />
        </main>
        <Footer />
      </>
    </>
  );
}
