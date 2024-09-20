import Link from "next/link";
import useGlobalContext from "../../hook/useGlobalContext";
import dynamic from "next/dynamic";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
const Collapsible = dynamic(() => import("react-collapsible"), {
  ssr: false,
});

const Sidebar = ({ sidebarTwo }) => {
  const { showSidebar, setShowSidebar } = useGlobalContext();
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const galleryImages = [
    {
      id: 1,
      img: "assets/img/gallery/gal-1.jpg",
    },
    {
      id: 2,
      img: "assets/img/gallery/gal-2.jpg",
    },
    {
      id: 3,
      img: "assets/img/gallery/gal-3.jpg",
    },
    {
      id: 4,
      img: "assets/img/gallery/gal-4.jpg",
    },
    {
      id: 5,
      img: "assets/img/gallery/gal-5.jpg",
    },
    {
      id: 6,
      img: "assets/img/gallery/gal-6.jpg",
    },
  ];
  const lightBoxImages = galleryImages.map((img) => img.img);
  const images = lightBoxImages;
 
  return (
    <>
      {open && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}

      {/* <!-- sidebar area start --> */}
      <div className={`${sidebarTwo ? "sidebar__area sidebar__area-2" : "sidebar__area"} 
		   ${showSidebar ? "sidebar-opened" : ""}`}
      >
        <div className="sidebar__wrapper">
          <div className="sidebar__close">
            <button
              onClick={() => setShowSidebar(false)}
              className="sidebar__close-btn"
              id="sidebar__close-btn"
            >
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="sidebar__content">
            <div className="sidebar__logo mb-40">
              <Link href="/">
                <a>
                  <img src="assets/img/logo/logo-black.png" alt="logo" />
                </a>
              </Link>
            </div>
            <div className="sidebar__search mb-25">
              <form action="#">
                <input type="text" placeholder="What are you searching for?" />
                <button type="submit">
                  <i className="far fa-search"></i>
                </button>
              </form>
            </div>

            <div className="mobile-menu fix">
              <nav
                id="mobile-menu"
                className={`${sidebarTwo ? "d-xl-none" : "d-lg-none"}`}
              >
                <ul>
                  <Collapsible
                    trigger={<a>Home</a>}
                    triggerTagName="div"
                    triggerOpenedClassName="icon_close"
                    triggerClassName="iconAdd"
                    open={false}
                  >
                    <ul
                      onClick={() => setShowSidebar(false)}
                      className="sidebar_sub_menu submenu text-black"
                    >
                      <li>
                        <Link href="/">Home One </Link>
                      </li>
                      <li>
                        <Link href="/home-two">Home Two</Link>
                      </li>
                      <li>
                        <Link href="/home-three">Home Three</Link>
                      </li>
                    </ul>
                  </Collapsible>

                  <Collapsible
                    trigger={<a>Services</a>}
                    triggerTagName="div"
                    triggerOpenedClassName="icon_close"
                    triggerClassName="iconAdd"
                    open={false}
                  >
                    <ul
                      onClick={() => setShowSidebar(false)}
                      className="sidebar_sub_menu submenu text-black"
                    >
                      <li>
                        <Link href="/services">Services</Link>
                      </li>
                      <li>
                        <Link href="/services-details">Services Details</Link>
                      </li>
                    </ul>
                  </Collapsible>

                  <Collapsible
                    trigger={<a>Pages</a>}
                    triggerTagName="div"
                    triggerOpenedClassName="icon_close"
                    triggerClassName="iconAdd"
                    open={false}
                  >
                    <ul
                      onClick={() => setShowSidebar(false)}
                      className="sidebar_sub_menu submenu text-black"
                    >
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li>
                        <Link href="/team">Team</Link>
                      </li>
                      <li>
                        <Link href="/team-details">Team Details</Link>
                      </li>
                      <li>
                        <Link href="/portfolio">Cases</Link>
                      </li>
                      <li>
                        <Link href="/portfolio-details">Cases Details</Link>
                      </li>
                      <li>
                        <Link href="/pricing">pricing Page</Link>
                      </li>
                      <li>
                        <Link href="/faq">FAQ Page</Link>
                      </li>
                    </ul>
                  </Collapsible>

                  <Collapsible
                    trigger={<a>News</a>}
                    triggerTagName="div"
                    triggerOpenedClassName="icon_close"
                    triggerClassName="iconAdd"
                    open={false}
                  >
                    <ul
                      onClick={() => setShowSidebar(false)}
                      className="sidebar_sub_menu submenu text-black"
                    >
                      <li>
                        <Link href="/blog">News</Link>
                      </li>
                      <li>
                        <Link href="/blog-details">News Details</Link>
                      </li>
                    </ul>
                  </Collapsible>

                  <div className="single_link iconAdd border-0">
                    <li>
                      <Link href="/contact">
                        <a>Contact</a>
                      </Link>
                    </li>
                  </div>
                </ul>
              </nav>
            </div>

            <div className={`sidebar__text d-none ${sidebarTwo ? "d-xl-block" 
            : "d-lg-block"}`}>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and will give you
                a complete account of the system and expound the actual
                teachings of the great explore
              </p>
            </div>
            <div
              className={`sidebar__img d-none ${
                sidebarTwo ? "d-xl-block" : "d-lg-block"
              } mb-20`}
            >
              <div className="row gx-2">
                {galleryImages.map((image,index) => (
                  <div key={image.id} className="col-4">
                    <div onClick={() => setShowSidebar(false)} 
                    className="sidebar__single-img w-img mb-10">
                      <button onClick={() => setOpen(true)} className="popup-image">
                        <a onClick={() => setPhotoIndex(index)}>
                          <img src={`${image.img}`} alt="" />
                        </a>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="sidebar__contact mt-30 mb-20">
              <h4>Contact Info</h4>
              <ul>
                <li className="d-flex align-items-center">
                  <div className="sidebar__contact-icon mr-15">
                    <i className="fal fa-map-marker-alt"></i>
                  </div>
                  <div className="sidebar__contact-text">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"
                    >
                      12/A, Mirnada City Tower, NYC
                    </a>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="sidebar__contact-icon mr-15">
                    <i className="far fa-phone"></i>
                  </div>
                  <div className="sidebar__contact-text">
                    <a href="tel:+012-345-6789">088889797697</a>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="sidebar__contact-icon mr-15">
                    <i className="fal fa-envelope"></i>
                  </div>
                  <div className="sidebar__contact-text">
                    <a href="mailto:info@gmail.com">info@gmail.com</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="sidebar__social">
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- sidebar area end -->      */}
      <div
        onClick={() => setShowSidebar(false)}
        className={`${showSidebar ? "body-overlay opened" : "body-overlay"}`}></div>
      {/* <!-- sidebar area end -->  */}
    </>
  );
};

export default Sidebar;
