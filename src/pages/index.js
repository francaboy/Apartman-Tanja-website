import BrandOne from "@/components/BrandOne/BrandOne";
import CompanyNumbers from "@/components/CompanyNumbers/CompanyNumbers";
import CTAOne from "@/components/CTAOne/CTAOne";
import FeatureOne from "@/components/FeatureOne/FeatureOne";

import Layout from "@/components/Layout/Layout";
import MainSliderTwo from "@/components/MainSliderTwo/MainSliderTwo";
import ProjectTwo from "@/components/ProjectTwo/ProjectTwo";
import ServicesTwo from "@/components/ServicesTwo/ServicesTwo";

import TestimonialTwo from "@/components/TestimonialTwo/TestimonialTwo";
import TwoBoxes from "@/components/TwoBoxes/TwoBoxes";
import WelcomeTwo from "@/components/WelcomeTwo/WelcomeTwo";
import React from "react";

const Index = () => {
  return (
    <Layout pageTitle="Početna">
      <MainSliderTwo />
      <FeatureOne />
      <WelcomeTwo />
      <CompanyNumbers />
      <ServicesTwo />
      <TwoBoxes />
      <ProjectTwo />
      <TestimonialTwo />
      <BrandOne />

      <CTAOne />
    </Layout>
  );
};

export default Index;