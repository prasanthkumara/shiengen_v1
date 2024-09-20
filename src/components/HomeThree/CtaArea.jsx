import Link from 'next/link';

const CtaArea = () => {
  return (
    <>
      <section
        className="cta__area pt-120 pb-115"
        style={{
          background: `url(assets/img/bg/cta-bg.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="cta__content text-center">
                <div className="cta__logo mb-45">
                  <Link href="/">
                    <a><img src="assets/img/logo/logo-white.png" alt="" /></a>
                  </Link>
                </div>
                <h6 className="cta__title mb-25">
                  World’s Leading Contract Industrial <br /> Services Provider.
                </h6>
                <div className="cta__button">
                  <Link href="/services" >
                    <a className="tp-btn mr-30">Our Services <i className="fal fa-angle-right"></i></a>
                  </Link>
                  <Link href="/about" >
                    <a className="tp-btn-2">Learn More</a>
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

export default CtaArea;
