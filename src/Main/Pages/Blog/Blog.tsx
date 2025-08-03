import { Link } from "react-router-dom";
import Img1 from "../../../Components/img/blog/blog-1.jpg";
import Img2 from "../../../Components/img/blog/blog-2.jpg";
import Img3 from "../../../Components/img/blog/blog-3.jpg";
import Img4 from "../../../Components/img/blog/blog-4.jpg";
import Img5 from "../../../Components/img/blog/blog-recent-1.jpg";
import Img6 from "../../../Components/img/blog/blog-recent-2.jpg";
import Img7 from "../../../Components/img/blog/blog-recent-3.jpg";
import Img8 from "../../../Components/img/blog/blog-recent-4.jpg";
import Img9 from "../../../Components/img/blog/blog-recent-5.jpg";
import Footer from "../MainPages/Footer";

export default function Blog() {
  return (
    <>
      {/* ======= Breadcrumbs =======  */}
      <section className="">
        <div className="container">
          <div>
            <Link to="/HyperHive">Home</Link>
          </div>
          <h2>Blog</h2>
        </div>
      </section>
      {/* End Breadcrumbs */}

      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8 entries">
              <article className="entry">
                <div className="entry-img">
                  <img src={Img1} alt="" className="img-fluid" />
                </div>
                <h2 className="entry-title">
                  <Link to="blog-single.html">
                    Dolorum optio tempore voluptas dignissimos cumque fuga qui
                    quibusdam quia
                  </Link>
                </h2>
                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person"></i>{" "}
                      <Link to="blog-single.html">John Doe</Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i>{" "}
                      <Link to="blog-single.html">
                        <time dateTime="2020-01-01">Jan 1, 2020</time>
                      </Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-chat-dots"></i>{" "}
                      <Link to="blog-single.html">12 Comments</Link>
                    </li>
                  </ul>
                </div>
                <div className="entry-content">
                  <p>
                    Similique neque nam consequuntur ad non maxime aliquam quas.
                    Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                    nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est
                    ea dolorem doloremque deleniti aperiam unde soluta. Est cum
                    et quod quos aut ut et sit sunt. Voluptate porro consequatur
                    assumenda perferendis dolore.
                  </p>
                  <div className="read-more">
                    <Link to="/HyperHive/blog_single">Read More</Link>
                  </div>
                </div>
              </article>
              {/* End blog entry */}
              <article className="entry">
                <div className="entry-img">
                  <img src={Img2} alt="" className="img-fluid" />
                </div>
                <h2 className="entry-title">
                  <Link to="blog-single.html">
                    Nisi magni odit consequatur autem nulla dolorem
                  </Link>
                </h2>
                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person"></i>{" "}
                      <Link to="blog-single.html">John Doe</Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i>{" "}
                      <Link to="blog-single.html">
                        <time dateTime="2020-01-01">Jan 1, 2020</time>
                      </Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-chat-dots"></i>{" "}
                      <Link to="blog-single.html">12 Comments</Link>
                    </li>
                  </ul>
                </div>
                <div className="entry-content">
                  <p>
                    Incidunt voluptate sit temporibus aperiam. Quia vitae aut
                    sint ullam quis illum voluptatum et. Quo libero rerum
                    voluptatem pariatur nam. Ad impedit qui officiis est in non
                    aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et
                    quia molestias laboriosam. Tempora nam odit omnis eum
                    corrupti qui aliquid excepturi molestiae. Facilis et sint
                    quos sed voluptas. Maxime sed tempore enim omnis non alias
                    odio quos distinctio.
                  </p>
                  <div className="read-more">
                    <Link to="/HyperHive/blog_single">Read More</Link>
                  </div>
                </div>
              </article>
              {/* End blog entry */}
              <article className="entry">
                <div className="entry-img">
                  <img src={Img3} alt="" className="img-fluid" />
                </div>
                <h2 className="entry-title">
                  <Link to="blog-single.html">
                    Possimus soluta ut id suscipit ea ut. In quo quia et soluta
                    libero sit sint.
                  </Link>
                </h2>
                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person"></i>{" "}
                      <Link to="blog-single.html">John Doe</Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i>{" "}
                      <Link to="blog-single.html">
                        <time dateTime="2020-01-01">Jan 1, 2020</time>
                      </Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-chat-dots"></i>{" "}
                      <Link to="blog-single.html">12 Comments</Link>
                    </li>
                  </ul>
                </div>
                <div className="entry-content">
                  <p>
                    Aut iste neque ut illum qui perspiciatis similique
                    recusandae non. Fugit autem dolorem labore omnis et. Eum
                    temporibus fugiat voluptate enim tenetur sunt omnis.
                    Doloremque est saepe laborum aut. Ipsa cupiditate ex harum
                    at recusandae nesciunt. Ut dolores velit.
                  </p>
                  <div className="read-more">
                    <Link to="/HyperHive/blog_single">Read More</Link>
                  </div>
                </div>
              </article>
              {/* End blog entry */}
              <article className="entry">
                <div className="entry-img">
                  <img src={Img4} alt="" className="img-fluid" />
                </div>
                <h2 className="entry-title">
                  <Link to="blog-single.html">
                    Non rem rerum nam cum quo minus. Dolor distinctio deleniti
                    explicabo eius exercitationem.
                  </Link>
                </h2>
                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person"></i>{" "}
                      <Link to="blog-single.html">John Doe</Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i>{" "}
                      <Link to="blog-single.html">
                        <time dateTime="2020-01-01">Jan 1, 2020</time>
                      </Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-chat-dots"></i>{" "}
                      <Link to="blog-single.html">12 Comments</Link>
                    </li>
                  </ul>
                </div>
                <div className="entry-content">
                  <p>
                    Aspernatur rerum perferendis et sint. Voluptates cupiditate
                    voluptas atque quae. Rem veritatis rerum enim et autem.
                    Saepe atque cum eligendi eaque iste omnis a qui. Quia sed
                    sunt. Ea asperiores expedita et et delectus voluptates
                    rerum. Id saepe ut itaque quod qui voluptas nobis porro
                    rerum. Quam quia nesciunt qui aut est non omnis. Inventore
                    occaecati et quaerat magni itaque nam voluptas. Voluptatem
                    ducimus sint id earum ut nesciunt sed corrupti nemo.
                  </p>
                  <div className="read-more">
                    <Link to="/HyperHive/blog_single">Read More</Link>
                  </div>
                </div>
              </article>
              {/* End blog entry  */}
              <div className="blog-pagination">
                <ul className="justify-content-center">
                  <li>
                    <Link to="#">1</Link>
                  </li>
                  <li className="active">
                    <Link to="#">2</Link>
                  </li>
                  <li>
                    <Link to="#">3</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* End blog entries list */}
            <div className="col-lg-4">
              <div className="sidebar">
                <h3 className="sidebar-title">Search</h3>
                <div className="sidebar-item search-form">
                  <form action="">
                    <input type="text" className="form-control" />
                    <button type="submit">
                      <i className="bi bi-search"></i>
                    </button>
                  </form>
                </div>
                {/* End sidebar search form */}
                <h3 className="sidebar-title">Categories</h3>
                <div className="sidebar-item categories">
                  <ul>
                    <li>
                      <Link to="#">
                        General <span>(25)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Lifestyle <span>(12)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Travel <span>(5)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Design <span>(22)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Creative <span>(8)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Educaion <span>(14)</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* End sidebar categories*/}
                <h3 className="sidebar-title">Recent Posts</h3>
                <div className="sidebar-item recent-posts">
                  <div className="post-item clearfix">
                    <img src={Img5} alt="" />
                    <h4>
                      <Link to="blog-single.html">
                        Nihil blanditiis at in nihil autem
                      </Link>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>
                  <div className="post-item clearfix">
                    <img src={Img6} alt="" />
                    <h4>
                      <Link to="blog-single.html">Quidem autem et impedit</Link>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>
                  <div className="post-item clearfix">
                    <img src={Img7} alt="" />
                    <h4>
                      <Link to="blog-single.html">
                        Id quia et et ut maxime similique occaecati ut
                      </Link>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>
                  <div className="post-item clearfix">
                    <img src={Img8} alt="" />
                    <h4>
                      <Link to="blog-single.html">
                        Laborum corporis quo dara net para
                      </Link>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>
                  <div className="post-item clearfix">
                    <img src={Img9} alt="" />
                    <h4>
                      <Link to="blog-single.html">
                        Et dolores corrupti quae illo quod dolor
                      </Link>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>
                </div>
                {/* End sidebar recent posts */}
                <h3 className="sidebar-title">Tags</h3>
                <div className="sidebar-item tags">
                  <ul>
                    <li>
                      <Link to="#">App</Link>
                    </li>
                    <li>
                      <Link to="#">IT</Link>
                    </li>
                    <li>
                      <Link to="#">Business</Link>
                    </li>
                    <li>
                      <Link to="#">Mac</Link>
                    </li>
                    <li>
                      <Link to="#">Design</Link>
                    </li>
                    <li>
                      <Link to="#">Office</Link>
                    </li>
                    <li>
                      <Link to="#">Creative</Link>
                    </li>
                    <li>
                      <Link to="#">Studio</Link>
                    </li>
                    <li>
                      <Link to="#">Smart</Link>
                    </li>
                    <li>
                      <Link to="#">Tips</Link>
                    </li>
                    <li>
                      <Link to="#">Marketing</Link>
                    </li>
                  </ul>
                </div>
                {/* End sidebar tags */}
              </div>
              {/* End sidebar */}
            </div>
            {/* End blog sidebar */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
