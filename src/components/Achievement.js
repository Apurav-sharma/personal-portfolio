import React from "react";
import { Carousel } from "react-bootstrap";

function Achieve() {
  const skills = [
    {
      name: "3-star at Codechef & pupil at Codeforces",
    },
    {
      name: "Leetcode rating(1658)",
    },
    {
      name: "Competitive Programming Lead at Coding Club at IIITV-ICD",
    }
  ];

  return (
    <div
      className="d-flex align-items-center justify-content-center flex-column"
      style={{ height: "500px", width: "100vw" }}
    >
      <div
        style={{
          height: "75px",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          color: "black",
        }}
      >
        <h1> My Achievements</h1>
      </div>
      <div
        style={{
          width: "auto",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="skill-card"
      >
        <Carousel
          style={{ color: "black", width: "1100px", height: "180px" }}
          variant="dark"
        >
          {skills.map((skill, index) => (
            <Carousel.Item key={index}>
              <div
                style={{ height: "180px" , marginLeft: "90px", marginRight: "90px" }}
                className="d-flex flex-column align-items-center justify-content-center"
              >
                <h2>{skill.name}</h2>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Achieve;