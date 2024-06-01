import React from 'react';
import { useLottie } from "lottie-react";
import  animationData from "./lottie/112581-about-us.json";
// import abtimg from "./assets/abtimg2.jpeg";

function About() {
  const options = {
    animationData: animationData,
    loop: true
  };

  const { View } = useLottie(options);
  return (
    <>
<div id="about" >
    <div class="container card bg-transparent mt-1 p-5"  style={ {border:"1px solid #82b39c",boxShadow: "rgba(56, 90, 73, 0.75) 12px 8px 12px"}}>
    <h1 class="sub-title text-center myname">About Me</h1>
           <hr />
      <div class="row pt-5">
        <div class="col-lg-6 col-md-6 col-sm-12 ">
        <div className="card-img-left justify-content-center row-cols-sm-1 " 
        data-aos='fade-down-right'>
            {/* <img
              src={abtimg}
              className="card-img-left bg-light shadow-lg "
              alt="Photo"
              style={{
               height:"22rem",
               width:"22rem",
                borderRadius:"5%",
                transition: "ease-in",
                transitionDelay: "0.2s",
              }}
            /> */}
            {View}
          </div>
        </div>
        <div class="col-lg-5 col-md-5 col-sm-8 pt-5 ">
          <div class="sec2 pt-5">
           
              <p className="card-text fw-bold" style={{textAlign: 'justify'}}>
              I bring over one year of hands-on experience in full stack web development. Proficient in front-end programming, I specialize in crafting visually engaging interfaces using HTML, CSS, JavaScript, Bootstrap, and React.js. My strong database skills include working with MySQL, MongoDB, and PostgreSQL. I am passionate about developing efficient and user-friendly web applications, implementing data management features, and enhancing task management capabilities. I have collaborated with team members to ensure seamless integration and scalability, prioritizing security and compliance standards throughout the development process.
              </p>
              <p className="card-text fw-bold" style={{textAlign: 'justify'}}>
                I like to interact with people, listen to new ideas . I am
                always open to have talk about anything and look forward to
                connect with you 🤝. 
              </p>
             
            

          </div>

        </div>

      </div>

    </div>
  </div>

    </>
  )
}

export default About