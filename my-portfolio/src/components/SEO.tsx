import React from "react";
import { Helmet } from "react-helmet";

const SEO: React.FC = () => (
  <Helmet>
    <title>Mohammed Ansar Hansi - Portfolio</title>
    <meta
      name="description"
      content="Welcome to my personal portfolio. I am a Computer Science graduate showcasing my projects, skills, and experiences."
    />
    <meta
      name="keywords"
      content="portfolio, computer science, projects, skills, resume, contact"
    />
    <meta name="author" content="Mohammed Ansar Hansi" />

    <meta property="og:title" content="Mohammed Ansar Hansi - Portfolio" />
    <meta
      property="og:description"
      content="Explore my projects and skills as a Computer Science graduate."
    />
    {/* <meta property="og:url" content="https://yourwebsite.com" /> */}
    <meta property="og:type" content="website" />
    <meta
      property="og:image"
      content="https://drive.google.com/file/d/17IlmKw5UywwTqFW0xFRSPn2fWvNYNODM/view?usp=drive_link"
    />
  </Helmet>
);

export default SEO;
