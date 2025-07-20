const ContactMap = () => {
  return (
    <>
      <section className="contact__map">
        <div className="contact__map-wrap">
          <iframe
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=1st+Main+Road,+Abbigere,+Bengaluru,+Karnataka,+IndiaContact&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          ></iframe>
          <div className="contact__map-icon">
            <i className="fa-solid fa-location-dot"></i>
            <img src="assets/img/bg/contact-icon-bg.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMap;
