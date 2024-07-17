import React from "react";

const GoogleMap = () => {
  return (
    <section className="google-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5346.8929226178525!2d17.189826219815988!3d44.77229136450247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e03062ccd6b05%3A0x73fe3280dfee195d!2s78000%20Banja%20Luka!5e0!3m2!1sen!2sba!4v1721231554004!5m2!1sen!2sba"
        className="google-map__one"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default GoogleMap;
