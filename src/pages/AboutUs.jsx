import React from "react";
import "../App.css";
import flow from "../assets/shi-poster-1.png";
import { BsFillCircleFill } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <p className="aboutus-heading">About Us</p>
      <section className="aboutus-section">
        <img src={flow} alt="flow" />
        <p className="aboutus-flow">Architectural Blueprint</p>
      </section>
      <section className="aboutus-section">
        <div className="aboutus-points">
          <p className="aboutus-que">
            <BsFillCircleFill className="aboutus-icon" />
            Our Mission
          </p>
          <p className="aboutus-ans">
            At Smart Education, we are driven by a singular mission: to empower
            medical students on their journey to becoming exceptional
            physicians. We understand that the choice of a standard medical
            textbook is pivotal to their success. However, the availability of
            numerous textbooks, each claiming alignment with CCIM or NCISM
            syllabus, has created a challenge. Some of these textbooks are
            excellent, while others fall short and may have been crafted with
            vested interests.
          </p>
        </div>
        <div className="aboutus-points">
          <p className="aboutus-que">
            <BsFillCircleFill className="aboutus-icon" />
            The Problem
          </p>
          <p className="aboutus-ans">
            This situation has led to a dilemma for students, often resulting in
            the selection of substandard books, which ultimately hampers the
            quality of their education. Recognizing the significance of this
            issue within the medical education landscape, NCISM constituted an
            expert committee. This committee was tasked with developing an
            assessment scale for textbooks and reference books.
          </p>
        </div>
        <div className="aboutus-points">
          <p className="aboutus-que">
            <BsFillCircleFill className="aboutus-icon" />
            Our Assessment Scale
          </p>
          <p className="aboutus-ans">
            The assessment scale, meticulously crafted after extensive
            deliberations by our expert committee, serves multiple essential
            purposes:
            <br />
            <br />
            <span>Selection of Quality Textbooks:</span> It aids teachers in
            selecting high-quality textbooks for their students, ensuring they
            receive the best education possible.
            <br />
            <br />
            <span>Reference for Authors:</span> It acts as a valuable reference
            for textbook writers, guiding them in creating comprehensive and
            informative materials.
            <br />
            <br />
            <span>Inclusion in Regulatory Bodies' Lists:</span> The scale
            provides the criteria necessary for textbooks to be recommended for
            inclusion in the lists of recognized apex and regulatory bodies.
          </p>
        </div>
        <div className="aboutus-points">
          <p className="aboutus-que">
            <BsFillCircleFill className="aboutus-icon" />
            How It Works
          </p>
          <p className="aboutus-ans">
            Our web application simplifies and streamlines the assessment
            process. It enables reviewers from around the world to submit their
            evaluations online. We have a network of subject-wise reviewers
            located across the country, with three reviewers assessing each
            book. The application efficiently summarizes the reviewers' remarks
            and the committee's decisions, ensuring a swift and objective
            evaluation.
          </p>
        </div>
        <div className="aboutus-points">
          <p className="aboutus-que">
            <BsFillCircleFill className="aboutus-icon" />
            Impact on Medical Education
          </p>
          <p className="aboutus-ans">
            Smart Education aims to revolutionize the medical education
            landscape. By ensuring the availability of top-quality textbooks and
            reference materials, we contribute to elevating the standards of
            medical education. Our commitment lies in fostering excellence among
            both students and educators.
          </p>
        </div>
        <div className="aboutus-points">
          <p className="aboutus-que">
            <BsFillCircleFill className="aboutus-icon" />
            Future Goals
          </p>
          <p className="aboutus-ans">
            We are continuously evolving and have exciting plans for the future.
            Stay tuned as we work on expanding our features, increasing our
            network of reviewers, and extending our reach to serve even more
            regions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
