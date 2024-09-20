import dynamic from 'next/dynamic'
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import AboutUs from "../components/Home/AboutUs";
import BlogArea from "../components/Home/BlogArea";
import BrandArea from "../components/Home/BrandArea";
import FeatureArea from "../components/Home/FeatureArea";
import HeroSlider from "../components/Home/HeroSlider";
import ProcessArea from "../components/Home/ProcessArea";
import SdBanner from "../components/Home/SdBanner";
import ServicesArea from "../components/Home/ServicesArea";
import TeamArea from "../components/Home/TeamArea";
import Testimonial from "../components/Home/Testimonial";
import SEO from "../components/seo";

const index = () => {
    return (
        <main>
          <SEO pageTitle="Home Default" />
          <Header/>  
          <HeroSlider/>
          <AboutUs/>
          <ServicesArea/>
          <SdBanner/>
          <BrandArea/>
          <FeatureArea/>
          <Testimonial/>
          <TeamArea/>
          <ProcessArea/>
          <BlogArea/>
          <Footer/>
        </main>
    );
};

export default dynamic(()=> Promise.resolve(index), {ssr: false});