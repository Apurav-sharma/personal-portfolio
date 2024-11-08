import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Banner() {
  var [isDeleting, setisDeleting] = useState(false);
  var [text, setText] = useState("");
  var [loop, setloop] = useState(0);

  const words = ["Web Developer", "Web Designer", "UI/UX Designer", "AI/ML Enthusiats"];
  const period = 2000;
  var [delta, setdelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  var tick = () => {
    var index = loop % words.length;
    var sent = words[index];
    var current = isDeleting
      ? sent.substring(0, text.length - 1)
      : sent.substring(0, text.length + 1);

    setText(current);

    if (isDeleting) setdelta((prev) => prev / 3);

    if (isDeleting && current === "") {
      setloop(loop + 1);
      setdelta(200);
      setisDeleting(false);
    } else if (!isDeleting && current === sent) {
      setisDeleting(true);
      setdelta(period);
    }
  };

  return (
    <Container style={{marginTop: "100px", marginLeft: "160px"}}>
      <Row className="row">
        <Col className="banner">
          <h1>
            Hello I'm Apurav, I'm a <span>{text}</span>
          </h1>
          <p>
            ljfbvjh dvbuiofnkjf edbnkjfnwekd dofnekjfnwekf edfno;knfklfn
            fnko;fnlksn wefno;kwenflkwe fikednfwenflk kdfnwedfl;kwed poefkwe
            dfkl;we fnfiope fo;iknfo kofned fvoik vk fweorifnof wojkg arog rowg
            aweriofg oirg jo gor fgioa goiawer fk;ja vjkrgv jko;gv awerko'gv
            aerojkfg awerokg fvawero gjio;er df vbjkfd erjkv aerjkv arjkv rf{" "}
          </p>
        </Col>
        <Col className="banner">
          <img
            src="https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-astronaut-clipart-cartoon-astronaut-sitting-in-space-vector-png-image_6797243.png"
            height={"370px"}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
