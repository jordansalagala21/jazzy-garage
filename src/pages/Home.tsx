import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import CarBrands from "../components/CarBrands";
import Testimonial from "../components/Testimonial";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Garage Services in Ewing Township, NJ | Professional Car Repair &
          Maintenance
        </title>
        <meta
          name="description"
          content="Visit our garage at 2095 Pennington Rd, Ewing Township, NJ, for top-notch car repair and maintenance services. We proudly serve Pennington, Ewing, and Lawrenceville areas."
        />
        <meta
          name="keywords"
          content="garage Ewing Township NJ, car repair Pennington, auto services Lawrenceville, car maintenance NJ"
        />
        <meta name="author" content="Garage Services Ewing Township NJ" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Garage Services Ewing Township NJ",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2095 Pennington Rd",
                "addressLocality": "Ewing Township",
                "addressRegion": "NJ",
                "postalCode": "08618",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "40.27819641525218",
                "longitude": "-74.78090766387362"
              },
              "telephone": "+1-(609)-583-5478",
              "openingHours": "Mo-Fr 07:00-19:00",
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61557182398750&mibextid=LQQJ4d",
              ]
            }
          `}
        </script>
      </Helmet>
      <Header />
      <HeroSection />
      <AboutUs />
      <CarBrands />
      <Services />
      <Testimonial />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
