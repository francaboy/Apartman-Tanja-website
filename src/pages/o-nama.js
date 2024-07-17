import AboutPage from "@/components/AboutPage/AboutPage";
import BestAgency from "@/components/BestAgency/BestAgency";
import BrandOne from "@/components/BrandOne/BrandOne";
import DesignStudio from "@/components/DesignStudio/DesignStudio";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import TeamOne from "@/components/TeamOne/TeamOne";
// import TestimonialTwo from "@/components/TestimonialTwo/TestimonialTwo";
import React from "react";

const Nama = () => {
  return (
    <Layout pageTitle="O nama">
      <PageHeader page="O nama" title="O nama" />
      <AboutPage />
      <BrandOne />
      <DesignStudio className="services-page-design-studio" />
      {/* <TestimonialTwo className="about-page-testimonial-two" /> */}

      <BestAgency className="about-page-best-agency" />
    </Layout>
  );
};

export default Nama;
