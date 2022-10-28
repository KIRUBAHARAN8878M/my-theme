import React from 'react'

function Skills() {
  return (
    <>
 
 <div class="container card bg-transparent mt-1 p-5  "  id="skills"  style={ {border:"1px solid #82b39c",boxShadow: "rgba(56, 90, 73, 0.75) 12px 8px 12px"}}>

<h1 className='text-center myname'>Skills</h1>
<hr className='myname'/>

<div class="row row-cols-md-2 row-cols-lg-3 row-cols-sm-2 m-3">

  <div class="col mt-sm-2 ">

    <div class="card" id="skill-card">
      <i class="fa-brands fa-js"></i>
      <div class="card-body">
        <p class="card-text">JavaScript</p>
      </div>
    </div>

  </div>

  <div class="col mt-sm-2 ">

    <div class="card" id="skill-card">
      <i class="fa-brands fa-html5"></i>
      <div class="card-body">
        <p class="card-text">HTML</p>
      </div>
    </div>

  </div>

  <div class="col mt-sm-2 ">

    <div class="card" id="skill-card">
      <i class="fa-brands fa-css3-alt"></i>
      <div class="card-body">
        <p class="card-text">CSS</p>
      </div>
    </div>

  </div>

  <div class="col mt-sm-2 ">

    <div class="card" id="skill-card">
      <i class="fa-brands fa-react"></i>
      <div class="card-body">
        <p class="card-text">ReactJs</p>
      </div>
    </div>

  </div>


  <div class="col mt-sm-2 ">

    <div class="card" id="skill-card">
      <i class="fa-brands fa-bootstrap"></i>
      <div class="card-body">
        <p class="card-text">Bootstrap</p>
      </div>
    </div>

  </div>

  <div class="col mt-sm-2">

    <div class="card" id="skill-card">
      <i class="fa-brands fa-node"></i>
      <div class="card-body">
        <p class="card-text">Nodejs</p>
      </div>
    </div>

  </div>

  <div class="col mt-sm-2">

    <div class="card" id="skill-card">
      <i class="fa-brands fa-git-alt"></i>
      <div class="card-body">
        <p class="card-text">GitHub</p>
      </div>
    </div>

  </div>

  <div class="col mt-sm-2">

    <div class="card" id="skill-card">
      <iconify-icon icon="simple-icons:postman" id="skill-lone"></iconify-icon>
      <div class="card-body">
        <p class="card-text">Postman</p>
      </div>
    </div>

  </div>

  <div class="col mt-sm-2">

    <div class="card" id="skill-card">
      <iconify-icon icon="simple-icons:express" id="skill-lone"></iconify-icon>
      <div class="card-body">
        <p class="card-text">ExpressJs</p>
      </div>
    </div>

  </div>




</div>
</div>
    </>
  )
}

export default Skills