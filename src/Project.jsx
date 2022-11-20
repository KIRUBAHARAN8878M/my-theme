
 import React from "react";
import '../src/project.css'
import project1 from '../src/assets/NoteMakerApp.jpg'
function Project() {

 

  return (
    <>
     <div id="project">
    <div class="container card bg-transparent mt-1 p-5  "  style={ {border:"1px solid #82b39c",boxShadow: "rgba(56, 90, 73, 0.75) 12px 8px 12px"}}>
      <h1 class="sub-title text-center myname" >Projects</h1>
      <hr />
      
           
                <section id="portfolio" class="portfolio">
    <div class="container">
    <div class="row portfolio-container">
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="card portfolio-wrap">
            <img src={project1} class="img-fluid" alt="" />
           
            <div className='card-title text-center pt-2'><h4>MERN NOTES MAKER APP</h4></div>
            <p className="text-center p-1"> React Js/Node Js/Express Js/MongoDB/Mongoose </p>
            <div class="portfolio-info">
              
              <div class="portfolio-links ">
                <a href="https://github.com/KIRUBAHARAN8878M/notes_maker" data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="F-code">
                  <i class="fa fa-plus"></i>
                  </a>
                <a href="https://notes-maker-frontend.netlify.app" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox me-4" title="Deploy link">
                  <i class="fa fa-link"></i>
                  </a>
                  <a href="https://github.com/KIRUBAHARAN8878M/NOTES_MAKER_BACKEND" data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="B-code">
                  <i class="fa fa-plus"></i>
                  </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="card  portfolio-wrap">
       
            <img src="https://cdn.dribbble.com/users/1615332/screenshots/11037958/media/a7c1c1228eab69970ade0e6c84913f69.png?compress=1&resize=768x576&vertical=top" class="img-fluid" alt="" />
            <div className='card-title text-center pt-2'><h4>Ecommerce Store App</h4></div>
           <p className="text-center p-1"> React Js/Node Js/Express Js/MongoDB</p>
            <div class="portfolio-info">
              
              <div class="portfolio-links ">
                <a href="https://www.w3schools.com/bootstrap4/img_avatar3.png" data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="F-code">
                  <i class="fa fa-plus"></i>
                  </a>
                <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox me-4" title="Deploy link">
                  <i class="fa fa-link"></i>
                  </a>
                  <a href="https://www.w3schools.com/bootstrap4/img_avatar3.png" data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="B-code">
                  <i class="fa fa-plus"></i>
                  </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="card  portfolio-wrap">
       
            <img src="https://assets.materialup.com/uploads/f04e67e3-ccce-49b8-80ca-b3531ebe3736/preview.png" class="img-fluid" alt="" />
            <div className='card-title text-center pt-2'><h4>MERN Pizza App</h4></div>
            <p className="text-center p-1"> React Js/Node Js/Express Js/MongoDB</p>
            <div class="portfolio-info">
              
              <div class="portfolio-links ">
                <a href="https://www.w3schools.com/bootstrap4/img_avatar3.png" data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="F-code">
                  <i class="fa fa-plus"></i>
                  </a>
                <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox me-4" title="Deploy link">
                  <i class="fa fa-link"></i>
                  </a>
                  <a href="https://www.w3schools.com/bootstrap4/img_avatar3.png" data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="B-code">
                  <i class="fa fa-plus"></i>
                  </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="card portfolio-wrap">
            <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" class="img-fluid" alt="" />
            <div className='card-title text-center'>Project Name</div>
           <p> Short notes</p>
            <div class="portfolio-info">
              
              <div class="portfolio-links ">
                <a href="https://www.w3schools.com/bootstrap4/img_avatar3.png" data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="F-code">
                  <i class="fa fa-plus"></i>
                  </a>
                <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox me-4" title="Deploy link">
                  <i class="fa fa-link"></i>
                  </a>
                  <a href="https://www.w3schools.com/bootstrap4/img_avatar3.png" data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="B-code">
                  <i class="fa fa-plus"></i>
                  </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="card portfolio-wrap">
            <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" class="img-fluid" alt="" />
            <div className='card-title text-center'>Project Name</div>
           <p> Short notes</p>
            <div class="portfolio-info">
              
              <div class="portfolio-links ">
                <a href="https://www.w3schools.com/bootstrap4/img_avatar3.png" data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="F-code">
                  <i class="fa fa-plus"></i>
                  </a>
                <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox me-4" title="Deploy link">
                  <i class="fa fa-link"></i>
                  </a>
                  <a href="https://www.w3schools.com/bootstrap4/img_avatar3.png" data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="B-code">
                  <i class="fa fa-plus"></i>
                  </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="card portfolio-wrap">
            <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" class="img-fluid" alt="" />
            <div className='card-title text-center'>Project Name</div>
           <p> Short notes</p>
            <div class="portfolio-info">
              
              <div class="portfolio-links ">
                <a href="https://www.w3schools.com/bootstrap4/img_avatar3.png" data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="F-code">
                  <i class="fa fa-plus"></i>
                  </a>
                <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox me-4" title="Deploy link">
                  <i class="fa fa-link"></i>
                  </a>
                  <a href="https://www.w3schools.com/bootstrap4/img_avatar3.png" data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="B-code">
                  <i class="fa fa-plus"></i>
                  </a>
              </div>
            </div>
          </div>
        </div> */}
        </div>

        </div>
        </section>
    </div>

  </div>
    </>
  )
}

export default Project          

// https://images.pond5.com/white-line-online-dating-app-footage-161993697_iconl.jpeg