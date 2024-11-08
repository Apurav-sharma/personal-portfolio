import React from "react";

function Connect() {
  return (
    <div className="connect">
      <div className="connect-img">
        <img style={{height: "300px", width: "300px"}}src="https://media1.thehungryjpeg.com/thumbs2/ori_3505933_a7a3887a812c062329b2bee4c80b075b741ffd5e_two-boys-hugging-best-friends-happy-smiling-kids-vector-illustration.jpg" />
      </div>
      <div className="connect-form">
        <h2>Want to connect with me ? </h2>
        <form className="w-75 connect-forms">
            <input className="form-control m-3" placeholder="Enter your name..." />
            <input className="form-control m-3" placeholder="Send a Message..."/>
            <button className="btn btn-success m-3 ml-4">Let's Connect</button>
        </form>
      </div>
    </div>
  );
}

export default Connect;
