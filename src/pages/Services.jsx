import React,{ useState, useEffect }  from "react";
import { TestimonyCard } from "../components/TestimonyCard";
import test1 from "../assets/testi1.webp";
import test2 from "../assets/test2.webp";
import test3 from "../assets/test3.webp";
import test4 from "../assets/test4.webp";
import test5 from "../assets/test5.webp";
import Carousel from "better-react-carousel";
import ServicesStatsCard from "../components/ServicesStatsCard";

const listOne = [
  {
    img: test1,
    name: " Mira, Student",
    disc: '"Transformed the way I approach my studies."',
  },
  {
    img: test2,
    name: " Dheeraj, Student ",
    disc: '"Life changing! I wish I had found this sooner."',
  },
  {
    img: test3,
    name: " Kevin Thomas, Author ",
    disc: '"A game-changer for every learner."',
  },
  {
    img: test4,
    name: " Akshay Anand, Professor ",
    disc: '"Expertise and quality like no other."',
  },
  {
    img: test5,
    name: " Riya Sogani, Student ",
    disc: '"Fantastic educational resource out there!"',
  },
  {
    img: test3,
    name: " Kevin Thomas, Author ",
    disc: '"A game-changer for every learner."',
  },
];

export const Services = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        // Increment the currentIndex to change the carousel item
        setCurrentIndex((prevIndex) => (prevIndex + 1) % listOne.length);
      }, 2000); // Change every 2 seconds (2000 milliseconds)
  
      return () => {
        // Clean up the interval when the component unmounts
        clearInterval(intervalId);
      };
    }, []);
  
  return (
    <div>
      <div className="services-heading">
        <h1>Our Services</h1>
        <p>
          Our services are designed to help students overcome the challenges of
          learning and education. We provide a wide range of services to help
          students learn better and achieve their goals.
        </p>
      </div>
      <div className="awards-container">
        <ServicesStatsCard value="1000+" param="Students" />
        <ServicesStatsCard value="60+" param="Curated Content Analysts" />
        <ServicesStatsCard value="100+" param="Verified Books" />
        <ServicesStatsCard value="15+" param="Publishers" />
      </div>
      <div className="test-heading"></div>
      <div className="services-main">
      <div className="testimony-container">
      <Carousel
        cols={1}
        rows={1}
        gap={0}
        loop
        value={currentIndex} // Set the current index to control the carousel
      >
        {listOne.map((book, index) => (
          <Carousel.Item key={index}>
            <TestimonyCard
              img={book.img}
              name={book.name}
              disc={book.disc}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
      </div>
    </div>
  );
};
