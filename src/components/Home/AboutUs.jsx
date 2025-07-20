import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <section className="about__area pt-120 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="ab-tab-info mb-30">
                <div className="ab-image w-img">
                  <img src="assets/img/products/taper-roller-conveyer.png" alt="" />
                </div>
                <div className="absp-text absp-text-1">
                  <i className="flaticon-windmill"></i>
                  <div className="absp-info">
                    <h5>
                      <span className="counter">50</span>+
                    </h5>
                    <span className="absm-title">Projects Done</span>
                  </div>
                </div>
                <div className="absp-text absp-text-2">
                  <i className="flaticon-container-1"></i>
                  <div className="absp-info">
                    <h5>
                      <span className="counter">30</span>+
                    </h5>
                    <span className="absm-title">Happy Customer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="ab-left-content">
                <div className="section__wrapper mb-30">
                  <h4 className="section__title">
                    We can take your business to the next level.
                  </h4>
                  <div className="r-text">
                    <span>about us</span>
                  </div>
                </div>
                <p className="abd-text">
                We are the partner of choice for many of India’s leading enterprises and industries.
                </p>
                <div className="ab-author mb-30">
                  <h5>
                    Pramod K R <span>- Founder</span>
                  </h5>
                </div>
                <p className="sm-text mb-45">
                Our mission is to design, manufacture, and deliver high-performance conveyor belt solutions that drive efficiency, durability, and innovation across industries. We are committed to supporting our clients with reliable products, customized engineering, and timely service—helping them move materials safely, smoothly, and sustainably.
                </p>
                <div className="ab-button mb-30">
                  <Link href="/about">
                    <a className="tp-btn">Learn More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
