import { Link } from "react-router-dom";
import Img1 from "../../../Components/img/team-1.jpg";
import Img2 from "../../../Components/img/team-2.jpg";

export default function Team() {
  return (
    <>
      {/* ======= Team Section =======  */}
      <section id="team">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <div className="section-header text-center mb-8">
            <h3>Team</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-center">
              <div className="member" data-aos="fade-up" data-aos-delay="100">
                <img
                  src={Img1}
                  className="img-fluid rounded-lg"
                  alt="Abhishek"
                />
                <div className="member-info">
                  <div className="member-info-content text-center">
                    <h4>Abhishek</h4>
                    <span>Chief Executive Officer</span>
                    <div className="social mt-2">
                      <Link
                        to="https://github.com/Abhishek1Mandal"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-github"></i>
                      </Link>

                      <Link to="" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-facebook"></i>
                      </Link>

                      <Link
                        to="https://www.instagram.com/1abhishek_mandal/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-instagram"></i>
                      </Link>

                      <Link to="" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="member" data-aos="fade-up" data-aos-delay="200">
                <img
                  src={Img2}
                  className="img-fluid rounded-lg"
                  alt="Sarah Jhonson"
                />
                <div className="member-info">
                  <div className="member-info-content text-center">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                    <div className="social mt-2">
                      <Link to="" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github"></i>
                      </Link>

                      <Link to="" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-facebook"></i>
                      </Link>

                      <Link to="" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-instagram"></i>
                      </Link>

                      <Link to="" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Team Section  */}
    </>
  );
}
