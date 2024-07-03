import { Link } from "react-router-dom";
import Img1 from "../../../Components/img/blog/blog-1.jpg";
import Img2 from "../../../Components/img/blog/blog-inside-post.jpg";
import Img3 from "../../../Components/img/blog/blog-author.jpg";
import Img4 from "../../../Components/img/blog/comments-1.jpg";
import Img5 from "../../../Components/img/blog/comments-2.jpg";
import Img6 from "../../../Components/img/blog/comments-3.jpg";
import Img7 from "../../../Components/img/blog/comments-4.jpg";
import Img8 from "../../../Components/img/blog/blog-recent-1.jpg";
import Img9 from "../../../Components/img/blog/blog-recent-2.jpg";
import Img10 from "../../../Components/img/blog/blog-recent-3.jpg";
import Img11 from "../../../Components/img/blog/blog-recent-4.jpg";
import Img12 from "../../../Components/img/blog/blog-recent-5.jpg";

export default function Blog_Single() {
  return (
    <>
      {/* ======= Breadcrumbs ======= */}
      <section className="">
        <div className="container">
          <ol>
            <div>
              <Link to="index.html">Home</Link>
            </div>
            <li>
              <Link to="blog.html">Blog</Link>
            </li>
          </ol>
          <h2>Blog Single</h2>
        </div>
      </section>
      {/* End Breadcrumbs  */}

      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8 entries">
              <article className="entry entry-single">
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
                  <ul className="flex items-center space-x-4">
                    <li className="flex items-center">
                      <i className="bi bi-person"></i>{" "}
                      <Link to="blog-single.html">John Doe</Link>
                    </li>
                    <li className="flex items-center">
                      <i className="bi bi-clock"></i>{" "}
                      <Link to="blog-single.html">
                        <time dateTime="2020-01-01">Jan 1, 2020</time>
                      </Link>
                    </li>
                    <li className="flex items-center">
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

                  <p>
                    Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non
                    reiciendis. Sequi in accusamus harum vel aspernatur.
                    Excepturi numquam nihil cumque odio. Et voluptate
                    cupiditate.
                  </p>

                  <blockquote>
                    <p>
                      Et vero doloremque tempore voluptatem ratione vel aut.
                      Deleniti sunt animi aut. Aut eos aliquam doloribus minus
                      autem quos.
                    </p>
                  </blockquote>

                  <p>
                    Sed quo laboriosam qui architecto. Occaecati repellendus
                    omnis dicta inventore tempore provident voluptas mollitia
                    aliquid. Id repellendus quia. Asperiores nihil magni dicta
                    est suscipit perspiciatis. Voluptate ex rerum assumenda
                    dolores nihil quaerat. Dolor porro tempora et quibusdam
                    voluptas. Beatae aut at ad qui tempore corrupti velit
                    quisquam rerum. Omnis dolorum exercitationem harum qui qui
                    blanditiis neque. Iusto autem itaque. Repudiandae hic quae
                    aspernatur ea neque qui. Architecto voluptatem magni. Vel
                    magnam quod et tempora deleniti error rerum nihil tempora.
                  </p>

                  <h3>Et quae iure vel ut odit alias.</h3>
                  <p>
                    Officiis animi maxime nulla quo et harum eum quis a. Sit hic
                    in qui quos fugit ut rerum atque. Optio provident dolores
                    atque voluptatem rem excepturi molestiae qui. Voluptatem
                    laborum omnis ullam quibusdam perspiciatis nulla nostrum.
                    Voluptatum est libero eum nesciunt aliquid qui. Quia et
                    suscipit non sequi. Maxime sed odit. Beatae nesciunt
                    nesciunt accusamus quia aut ratione aspernatur dolor. Sint
                    harum eveniet dicta exercitationem minima. Exercitationem
                    omnis asperiores natus aperiam dolor consequatur id ex sed.
                    Quibusdam rerum dolores sint consequatur quidem ea. Beatae
                    minima sunt libero soluta sapiente in rem assumenda. Et qui
                    odit voluptatem. Cum quibusdam voluptatem voluptatem
                    accusamus mollitia aut atque aut.
                  </p>
                  <img src={Img2} className="img-fluid" alt="" />

                  <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
                  <p>
                    Rerum ea est assumenda pariatur quasi et quam. Facilis nam
                    porro amet nostrum. In assumenda quia quae a id praesentium.
                    Quos deleniti libero sed occaecati aut porro autem.
                    Consectetur sed excepturi sint non placeat quia repellat
                    incidunt labore. Autem facilis hic dolorum dolores vel.
                    Consectetur quasi id et optio praesentium aut asperiores
                    eaque aut. Explicabo omnis quibusdam esse. Ex libero illum
                    iusto totam et ut aut blanditiis. Veritatis numquam ut illum
                    ut a quam vitae.
                  </p>
                  <p>
                    Alias quia non aliquid. Eos et ea velit. Voluptatem maxime
                    enim omnis ipsa voluptas incidunt. Nulla sit eaque mollitia
                    nisi asperiores est veniam.
                  </p>
                </div>

                <div className="entry-footer">
                  <i className="bi bi-folder"></i>
                  <ul className="cats">
                    <li>
                      <Link to="#">Business</Link>
                    </li>
                  </ul>

                  <i className="bi bi-tags"></i>
                  <ul className="tags">
                    <li>
                      <Link to="#">Creative</Link>
                    </li>
                    <li>
                      <Link to="#">Tips</Link>
                    </li>
                    <li>
                      <Link to="#">Marketing</Link>
                    </li>
                  </ul>
                </div>
              </article>

              <div className="blog-author flex items-center">
                <img src={Img3} className="rounded-full float-left" alt="" />
                <div>
                  <h4>Jane Smith</h4>
                  <div className="social-links">
                    <Link to="https://twitters.com/#">
                      <i className="bi bi-twitter"></i>
                    </Link>
                    <Link to="https://facebook.com/#">
                      <i className="bi bi-facebook"></i>
                    </Link>
                    <Link to="https://instagram.com/#">
                      <i className="bi bi-instagram"></i>
                    </Link>
                  </div>
                  <p>
                    Itaque quidem optio quia voluptatibus dolorem dolor. Modi
                    eum sed possimus accusantium. Quas repellat voluptatem
                    officia numquam sint aspernatur voluptas. Esse et
                    accusantium ut unde voluptas.
                  </p>
                </div>
              </div>

              <div className="blog-comments">
                <h4 className="comments-count">8 Comments</h4>

                <div id="comment-1" className="comment">
                  <div className="flex">
                    <div className="comment-img">
                      <img src={Img4} alt="" />
                    </div>
                    <div>
                      <h5>
                        <Link to="">Georgia Reader</Link>{" "}
                        <Link to="#" className="reply">
                          <i className="bi bi-reply-fill"></i> Reply
                        </Link>
                      </h5>
                      <time dateTime="2020-01-01">01 Jan, 2020</time>
                      <p>
                        Et rerum totam nisi. Molestiae vel quam dolorum vel
                        voluptatem et et. Est ad aut sapiente quis molestiae est
                        qui cum soluta. Vero aut rerum vel. Rerum quos
                        laboriosam placeat ex qui. Sint qui facilis et.
                      </p>
                    </div>
                  </div>
                </div>

                <div id="comment-2" className="comment">
                  <div className="flex">
                    <div className="comment-img">
                      <img src={Img5} alt="" />
                    </div>
                    <div>
                      <h5>
                        <Link to="">Aron Alvarado</Link>{" "}
                        <Link to="#" className="reply">
                          <i className="bi bi-reply-fill"></i> Reply
                        </Link>
                      </h5>
                      <time dateTime="2020-01-01">01 Jan, 2020</time>
                      <p>
                        Ipsam tempora sequi voluptatem quis sapiente non. Autem
                        itaque eveniet saepe. Officiis illo ut beatae.
                      </p>
                    </div>
                  </div>

                  <div id="comment-reply-1" className="comment comment-reply">
                    <div className="flex">
                      <div className="comment-img">
                        <img src={Img6} alt="" />
                      </div>
                      <div>
                        <h5>
                          <Link to="">Lynda Small</Link>{" "}
                          <Link to="#" className="reply">
                            <i className="bi bi-reply-fill"></i> Reply
                          </Link>
                        </h5>
                        <time dateTime="2020-01-01">01 Jan, 2020</time>
                        <p>
                          Enim ipsa eum fugiat fuga repellat. Commodi quo quo
                          dicta. Est ullam aspernatur ut vitae quia mollitia id
                          non. Qui ad quas nostrum rerum sed necessitatibus aut
                          est. Eum officiis sed repellat maxime vero nisi natus.
                          Amet nesciunt nesciunt qui illum omnis est et dolor
                          recusandae. Recusandae sit ad aut impedit et. Ipsa
                          labore dolor impedit et natus in porro aut. Magnam qui
                          cum. Illo similique occaecati nihil modi eligendi.
                          Pariatur distinctio labore omnis incidunt et illum.
                          Expedita et dignissimos distinctio laborum minima
                          fugiat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="comment-3" className="comment">
                  <div className="flex">
                    <div className="comment-img">
                      <img src={Img7} alt="" />
                    </div>
                    <div>
                      <h5>
                        <Link to="">Sianna Ramsay</Link>{" "}
                        <Link to="#" className="reply">
                          <i className="bi bi-reply-fill"></i> Reply
                        </Link>
                      </h5>
                      <time dateTime="2020-01-01">01 Jan, 2020</time>
                      <p>
                        Et dignissimos impedit nulla et quo distinctio ex nemo.
                        Omnis quia dolores cupiditate et. Ut unde qui eligendi
                        sapiente omnis ullam. Placeat porro est commodi est
                        officiis voluptas repellat quisquam possimus.
                        Perferendis id consectetur necessitatibus.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="reply-form">
                  <h4>Leave a Reply</h4>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *{" "}
                  </p>
                  <form action="">
                    <div className="flex flex-wrap space-y-4">
                      <div className="w-full md:w-1/2">
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          placeholder="Your Name*"
                        />
                      </div>
                      <div className="w-full md:w-1/2 mt-0">
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          placeholder="Your Email*"
                        />
                      </div>
                    </div>
                    <div className="mb-4 mt-4">
                      <input
                        name="website"
                        type="text"
                        className="form-control"
                        placeholder="Your Website"
                      />
                    </div>
                    <div className="mb-4">
                      <textarea
                        name="comment"
                        className="form-control"
                        placeholder="Your Comment*"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Post Comment
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar" data-aos="fade-left">
                <h3 className="sidebar-title">Search</h3>
                <div className="sidebar-item search-form">
                  <form action="">
                    <input type="text" />
                    <button type="submit">
                      <i className="bi bi-search"></i>
                    </button>
                  </form>
                </div>

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
                        Education <span>(14)</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <h3 className="sidebar-title">Recent Posts</h3>
                <div className="sidebar-item recent-posts">
                  <div className="post-item flex">
                    <img src={Img8} alt="" className="w-16 h-16 object-cover" />
                    <div>
                      <h4>
                        <Link to="blog-single.html">
                          Nihil blanditiis at in nihil autem
                        </Link>
                      </h4>
                      <time dateTime="2020-01-01">Jan 1, 2020</time>
                    </div>
                  </div>

                  <div className="post-item flex">
                    <img src={Img9} alt="" className="w-16 h-16 object-cover" />
                    <div>
                      <h4>
                        <Link to="blog-single.html">
                          Quidem autem et impedit
                        </Link>
                      </h4>
                      <time dateTime="2020-01-01">Jan 1, 2020</time>
                    </div>
                  </div>

                  <div className="post-item flex">
                    <img
                      src={Img10}
                      alt=""
                      className="w-16 h-16 object-cover"
                    />
                    <div>
                      <h4>
                        <Link to="blog-single.html">
                          Id quia et et ut maxime similique occaecati ut
                        </Link>
                      </h4>
                      <time dateTime="2020-01-01">Jan 1, 2020</time>
                    </div>
                  </div>

                  <div className="post-item flex">
                    <img
                      src={Img11}
                      alt=""
                      className="w-16 h-16 object-cover"
                    />
                    <div>
                      <h4>
                        <Link to="blog-single.html">
                          Laborum corporis quo dara net para
                        </Link>
                      </h4>
                      <time dateTime="2020-01-01">Jan 1, 2020</time>
                    </div>
                  </div>

                  <div className="post-item flex">
                    <img
                      src={Img12}
                      alt=""
                      className="w-16 h-16 object-cover"
                    />
                    <div>
                      <h4>
                        <Link to="blog-single.html">
                          Et dolores corrupti quae illo quod dolor
                        </Link>
                      </h4>
                      <time dateTime="2020-01-01">Jan 1, 2020</time>
                    </div>
                  </div>
                </div>

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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
