import { Link } from "react-router-dom";
import { useEffect } from "react";
import Img1 from "../../../Components/img/about-mission.jpg";
import Img2 from "../../../Components/img/about-plan.jpg";
import Img3 from "../../../Components/img/about-vision.jpg";
import Img4 from "../../../Components/img/facts-img.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import CountUp from "react-countup";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* ======= About Us Section =======  */}
      <section id="about">
        <div className="container mt-16" data-aos="fade-up">
          <header className="section-header">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </header>

          <div className="row about-cols">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="about-col">
                <div className="img">
                  <img src={Img1} alt="" className="img-fluid" />
                  <div className="icon">
                    <i className="bi bi-bar-chart"></i>
                  </div>
                </div>
                <h2 className="title">
                  <Link to="#">Our Mission</Link>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                  tempor ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="about-col">
                <div className="img">
                  <img src={Img2} alt="" className="img-fluid" />
                  <div className="icon">
                    <i className="bi bi-brightness-high"></i>
                  </div>
                </div>
                <h2 className="title">
                  <Link to="#">Our Plan</Link>
                </h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto beatae vitae
                  dicta sunt explicabo.
                </p>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="about-col">
                <div className="img">
                  <img src={Img3} alt="" className="img-fluid" />
                  <div className="icon">
                    <i className="bi bi-calendar4-week"></i>
                  </div>
                </div>
                <h2 className="title">
                  <Link to="#">Our Vision</Link>
                </h2>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aut odit aut
                  fugit, sed quia magni dolores eos qui ratione voluptatem sequi
                  nesciunt Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Us Section */}

      {/* ======= Services Section =======  */}
      <section id="services">
        <div className="container mt-16" data-aos="fade-up">
          <header className="section-header wow fadeInUp">
            <h3>Services</h3>
            <p>
              Laudem latine persequeris id sed, ex fabulas delectus quo. No vel
              partiendo abhorreant vituperatoribus, ad pro quaestio laboramus.
              Ei ubique vivendum pro. At ius nisl accusam lorenta zanos
              paradigno tridexa panatarel.
            </p>
          </header>

          <div className="row">
            <div
              className="col-lg-4 col-md-6 box"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="icon">
                <i className="bi bi-briefcase"></i>
              </div>
              <h4 className="title">
                <Link to="">Lorem Ipsum</Link>
              </h4>
              <p className="description">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati cupiditate non provident
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="icon">
                <i className="bi bi-card-checklist"></i>
              </div>
              <h4 className="title">
                <Link to="">Dolor Sitema</Link>
              </h4>
              <p className="description">
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat tarad limino ata
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="icon">
                <i className="bi bi-bar-chart"></i>
              </div>
              <h4 className="title">
                <Link to="">Sed ut perspiciatis</Link>
              </h4>
              <p className="description">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="icon">
                <i className="bi bi-binoculars"></i>
              </div>
              <h4 className="title">
                <Link to="">Magni Dolores</Link>
              </h4>
              <p className="description">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="icon">
                <i className="bi bi-brightness-high"></i>
              </div>
              <h4 className="title">
                <Link to="">Nemo Enim</Link>
              </h4>
              <p className="description">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="icon">
                <i className="bi bi-calendar4-week"></i>
              </div>
              <h4 className="title">
                <Link to="">Eiusmod Tempor</Link>
              </h4>
              <p className="description">
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End Services Section  */}

      {/* ======= Call To Action Section =======  */}
      <section id="call-to-action">
        <div className="container text-center" data-aos="zoom-in">
          <h3>Call To Action</h3>
          <p>
            {" "}
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <Link className="cta-btn" to="#">
            Call To Action
          </Link>
        </div>
      </section>
      {/* End Call To Action Section  */}

      {/* ======= Facts Section =======  */}
      <section id="facts" className="mt-12">
        <div className="container mx-auto py-12" data-aos="fade-up">
          <header className="section-header text-center mb-8">
            <h3 className="text-3xl font-semibold">Facts</h3>
            <p className="text-lg text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <span className="block text-5xl text-green-500 font-bold">
                <CountUp start={0} end={232} duration={2} />
              </span>
              <p className="mt-2">Clients</p>
            </div>

            <div>
              <span className="block text-5xl text-green-500 font-bold">
                <CountUp start={0} end={421} duration={2} />
              </span>
              <p className="mt-2">Projects</p>
            </div>

            <div>
              <span className="block text-5xl text-green-500 font-bold">
                <CountUp start={0} end={1364} duration={2} />
              </span>
              <p className="mt-2">Hours Of Support</p>
            </div>

            <div>
              <span className="block text-5xl text-green-500 font-bold">
                <CountUp start={0} end={38} duration={2} />
              </span>
              <p className="mt-2">Hard Workers</p>
            </div>
          </div>

          <div className="facts-img mt-12">
            <img
              src={Img4}
              alt="Facts representation"
              className="img-fluid mx-auto"
            />
          </div>
        </div>
      </section>
      {/* End Facts Section */}
    </>
  );
}
