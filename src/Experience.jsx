import React from 'react';

function Experience() {
  return (
    <div className="container card bg-transparent mt-1 p-5" id="skills" style={{ border: "1px solid #82b39c", boxShadow: "rgba(56, 90, 73, 0.75) 12px 8px 12px" }}>
      <h1 className="text-center myname">Certifications</h1>
      <hr className="myname" />

      <div className="row row-cols-md-2 row-cols-lg-3 row-cols-sm-2 m-3">
       <div className='container'>
        <h4>
        LAHTP (Learn the art of hacking through programming) -LEGACY
        </h4>
        <p>Selfmade Ninja Academy</p>
        <p>JAN 2024 - Till Date</p>
       </div>
       <div>
        <h4>
        Full Stack Web Development - MERN
        </h4>
        <p>Guvi Geek network P.Ltd IITM</p>
        <p>JUN 2022 - FEB 2023</p>
       </div>
      </div>
    </div>
  );
}

export default Experience;
