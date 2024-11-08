import React from "react";
import { Carousel } from "react-bootstrap";

function Skills() {
  const skills = [
    {
      name: "C, C++, Javascript Programming language",
      description:
        "Proficient in writing efficient and optimized C code for various applications.",
    },
    {
      name: "HTML, CSS & Bootstrap",
      description: "Skilled in creating responsive and accessible web pages.",
    },
    { name: "React", description: "have a good knowledge about such a good frameworks" },
    {name: "Machine Learning", description: "Have a Knowledge of ML algorithms and had build some good machine learning models"},
    {name: "Socket.io", description: "Learns about the basics of socket.io"}
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
        <h1> My Skills</h1>
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
          style={{ color: "black", width: "850px", height: "180px" }}
          variant="dark"
        >
          {skills.map((skill, index) => (
            <Carousel.Item key={index}>
              <div
                style={{ height: "200px" }}
                className="d-flex flex-column align-items-center justify-content-center"
              >
                <h2>{skill.name}</h2>
                <p>{skill.description}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Skills;
