
 import React from "react";
import '../src/project.css'
import project1 from '../src/assets/NoteMakerApp.jpg'
import project4 from '../src/assets/retailshopinventory.jpeg'
import project5 from '../src/assets/recipesbuddyapp.jpeg'
import project2 from '../src/assets/watch.jpeg'
import project3 from '../src/assets/url.jpeg'
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
           
            <div className='card-title text-center pt-2'><h4>MERN NOTES MAKER App</h4></div>
            <p className="text-center p-1"> React Js/Node Js/Express Js/MongoDB/Mongoose </p>
            <div class="portfolio-info">
              
              <div class="portfolio-links ">
                <a href="https://github.com/KIRUBAHARAN8878M/notes_maker" target='_blank' data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="F-code">
                  <i class="fa fa-plus"></i>
                  </a>
                <a href="https://notes-maker-frontend.netlify.app" target='_blank' data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox me-4" title="Deploy link">
                  <i class="fa fa-link"></i>
                  </a>
                  <a href="https://github.com/KIRUBAHARAN8878M/NOTES_MAKER_BACKEND" target='_blank' data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="B-code">
                  <i class="fa fa-plus"></i>
                  </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="card  portfolio-wrap">
       
            <img src={project2} class="img-fluid" alt="" />
            <div className='card-title text-center pt-2'><h4>JUST WATCHES MERN App</h4></div>
           <p className="text-center p-1"> React Js/Node Js/Express Js/MongoDB/Mongoose</p>
            <div class="portfolio-info">
              
              <div class="portfolio-links ">
                <a href="https://github.com/KIRUBAHARAN8878M/E-commerce-FE" data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="F-code">
                  <i class="fa fa-plus"></i>
                  </a>
                <a href="https://just-watches.netlify.app" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox me-4" title="Deploy link">
                  <i class="fa fa-link"></i>
                  </a>
                  <a href="https://github.com/KIRUBAHARAN8878M/E-commerce-BE" data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="B-code">
                  <i class="fa fa-plus"></i>
                  </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="card  portfolio-wrap">
       
            <img src={project3} class="img-fluid" alt="" />
            <div className='card-title text-center pt-2'><h4>URL SHORTNER App</h4></div>
            <p className="text-center p-1"> React Js/Node Js/Express Js/MongoDB</p>
            <div class="portfolio-info">
              
              <div class="portfolio-links ">
                <a href="https://github.com/KIRUBAHARAN8878M/Url-Shortener-FE" data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="F-code">
                  <i class="fa fa-plus"></i>
                  </a>
                <a href="https://url-shortner-kiru-app.netlify.app" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox me-4" title="Deploy link">
                  <i class="fa fa-link"></i>
                  </a>
                  <a href="https://github.com/KIRUBAHARAN8878M/Url-Shortener-BE" data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="B-code">
                  <i class="fa fa-plus"></i>
                  </a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="card  portfolio-wrap">
       
            <img src={project4} class="img-fluid" alt="" />
            <div className='card-title text-center pt-2'><h4>RETAIL SHOP INVENTORY MERN App</h4></div>
            <p className="text-center p-1"> React Js/Node Js/Express Js/MongoDB/Mongoose</p>
            <div class="portfolio-info">
              
              <div class="portfolio-links ">
                <a href="https://github.com/KIRUBAHARAN8878M/Retail_Shop_App_FE" data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="F-code">
                  <i class="fa fa-plus"></i>
                  </a>
                <a href="https://kiru-retail-shop-app.netlify.app" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox me-4" title="Deploy link">
                  <i class="fa fa-link"></i>
                  </a>
                  <a href="https://github.com/KIRUBAHARAN8878M/Retail_Shop_App_BE" data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="B-code">
                  <i class="fa fa-plus"></i>
                  </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="card  portfolio-wrap">
       
            <img src={project5} class="img-fluid" alt="" />
            <div className='card-title text-center pt-2'><h4>RECIPES BUDDY MERN App</h4></div>
            <p className="text-center p-1"> React Js/Node Js/Express Js/MongoDB</p>
            <div class="portfolio-info">
              
              <div class="portfolio-links ">
                <a href="https://github.com/KIRUBAHARAN8878M/Recipes-buddy-frontend" data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="F-code">
                  <i class="fa fa-plus"></i>
                  </a>
                <a href="https://recipes-buddy-frontend.netlify.app" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox me-4" title="Deploy link">
                  <i class="fa fa-link"></i>
                  </a>
                  <a href="https://github.com/KIRUBAHARAN8878M/Recipes-buddy-backend" data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="B-code">
                  <i class="fa fa-plus"></i>
                  </a>
              </div>
            </div>
          </div>
        </div>
      
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