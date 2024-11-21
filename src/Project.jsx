
 import React from "react";
import '../src/project.css'
import project1 from '../src/assets/NoteMakerApp.jpg'
import project4 from '../src/assets/retailshopinventory.jpeg'
import project5 from '../src/assets/recipesbuddyapp.jpeg'
import project2 from '../src/assets/watch.jpeg'
import project6 from '../src/assets/burgerapp.png'
import project7 from '../src/assets/weathernew.jpeg'
import project8 from '../src/assets/habittracker.jpeg'


function Project() {

 

  return (
    <>
     <div id="project">
    <div class="container card bg-transparent mt-1 p-5  "  style={ {border:"1px solid #82b39c",boxShadow: "rgba(56, 90, 73, 0.75) 12px 8px 12px"}}>
      <h1 class="sub-title text-center myname" >Projects</h1>
      <hr />
     
      <div class="card border-light mb-3 bg-transparent">
 
  <div class="card-body  text-success">
    <h5 class="card-title text-center fw-bold  text-uppercase"> Common Credentials</h5><hr />
    <p class="card-text text-center text-light"><span className="fw-bold  myname text-uppercase">User :-</span> kirubaharan8878m@gmail.com || password: User@1234</p>
    <p class="card-text text-center text-light"><span className="fw-bold myname  text-uppercase">Admin :-</span> kirubam8878@gmail.com || password: Admin@1234</p>
  </div>
 
</div>

           
                <section id="portfolio" class="portfolio">
    <div class="container">
    <div class="row portfolio-container">
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="card bg-transparent border-dark">
            <img src={project1} class="img-fluid" alt="" />
           
            <div className='card-title text-center pt-2'><h4>MERN NOTES MAKER App</h4></div>
            <p className="text-center p-1"> React Js/Node Js/Express Js/MongoDB/Mongoose </p>
            <div className="card-footer text-center text-dark">
            <a href="https://github.com/KIRUBAHARAN8878M/notes_maker" target='_blank' data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="F-code">
                  <i class="fa fa-github text-light"> F-end</i>
                  </a>
                <a href="https://notes-maker-frontend.netlify.app" target='_blank' data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox me-4" title="Deploy link">
                  <i class="fa fa-link text-success"> Live</i>
                  </a>
                  <a href="https://github.com/KIRUBAHARAN8878M/NOTES_MAKER_BACKEND" target='_blank' data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="B-code">
                  <i class="fa fa-github text-light"> B-end</i>
                  </a>
            </div>
            {/* <div class="portfolio-info">
              
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
            </div> */}
          </div>
        </div>
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="card  bg-transparent border-dark">
       
            <img src={project2} class="img-fluid" alt="" />
            <div className='card-title text-center pt-2'><h4>JUST WATCHES MERN App</h4></div>
           <p className="text-center p-1"> React Js/Node Js/Express Js/MongoDB/Mongoose</p>
           <div className="card-footer text-center text-dark">
            <a href="https://github.com/KIRUBAHARAN8878M/E-commerce-FE" target='_blank' data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="F-code">
                  <i class="fa fa-github text-light"> F-end</i>
                  </a>
                <a href="https://just-watches.netlify.app" target='_blank' data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox me-4" title="Deploy link">
                  <i class="fa fa-link text-success"> Live</i>
                  </a>
                  <a href="https://github.com/KIRUBAHARAN8878M/E-commerce-BE" target='_blank' data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="B-code">
                  <i class="fa fa-github text-light"> B-end</i>
                  </a>
            </div>
           
           
          </div>
        </div>
     
        
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="card  bg-transparent border-dark">
       
            <img src={project4} class="img-fluid" alt="" />
            <div className='card-title text-center pt-2'><h5>RETAIL SHOP INVENTORY MERN App</h5></div>
            <p className="text-center p-1"> React Js/Node Js/Express Js/MongoDB/Mongoose</p>
           
           
            <div className="card-footer text-center text-dark">
            <a href="https://github.com/KIRUBAHARAN8878M/Retail_Shop_App_FE" target='_blank' data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="F-code">
                  <i class="fa fa-github text-light"> F-end</i>
                  </a>
                <a href="https://kiru-retail-shop-app.netlify.app" target='_blank' data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox me-4" title="Deploy link">
                  <i class="fa fa-link text-success"> Live</i>
                  </a>
                  <a href="https://github.com/KIRUBAHARAN8878M/Retail_Shop_App_BE" target='_blank' data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="B-code">
                  <i class="fa fa-github text-light"> B-end</i>
                  </a>
            </div>
           
            {/* <div class="portfolio-info">
              
              <div class="portfolio-links ">
                <a href="https://github.com/KIRUBAHARAN8878M/Retail_Shop_App_FE"  target='_blank' data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="F-code">
                  <i class="fa fa-plus"></i>
                  </a>
                <a href="https://kiru-retail-shop-app.netlify.app" target='_blank' data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox me-4" title="Deploy link">
                  <i class="fa fa-link"></i>
                  </a>
                  <a href="https://github.com/KIRUBAHARAN8878M/Retail_Shop_App_BE" target='_blank' data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="B-code">
                  <i class="fa fa-plus"></i>
                  </a>
              </div>
            </div> */}
          </div>
        </div>
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="card  bg-transparent border-dark">
       
            <img src={project5} class="img-fluid" alt="" />
            <div className='card-title text-center pt-2'><h4>RECIPES BUDDY MERN App</h4></div>
            <p className="text-center p-1"> React Js/Node Js/Express Js/MongoDB</p>
           
            <div className="card-footer text-center text-dark">
            <a href="https://github.com/KIRUBAHARAN8878M/Recipes-buddy-frontend" target='_blank' data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="F-code">
                  <i class="fa fa-github text-light"> F-end</i>
                  </a>
                <a href="https://recipes-buddy-frontend.netlify.app" target='_blank' data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox me-4" title="Deploy link">
                  <i class="fa fa-link text-success"> Live</i>
                  </a>
                  <a href="https://github.com/KIRUBAHARAN8878M/Recipes-buddy-backend" target='_blank' data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="B-code">
                  <i class="fa fa-github text-light"> B-end</i>
                  </a>
            </div>
           
          </div>
        </div>
       
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="card  bg-transparent border-dark">
       
            <img src={project6} class="img-fluid" alt="" />
            <div className='card-title text-center pt-2'><h4>TASTY BURGER MERN App</h4></div>
            <p className="text-center p-1"> React Js/Node Js/Express Js/MongoDB/Redux/Mongoose</p>
           
            <div className="card-footer text-center text-dark">
            <a href="https://github.com/KIRUBAHARAN8878M/DeliveryApp_FE" target='_blank' data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="F-code">
                  <i class="fa fa-github text-light"> F-end</i>
                  </a>
                <a href="https://deliveryapp-fe.netlify.app" target='_blank' data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox me-4" title="Deploy link">
                  <i class="fa fa-link text-success"> Live</i>
                  </a>
                  <a href="https://github.com/KIRUBAHARAN8878M/DeliveryApp_BE" target='_blank' data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="B-code">
                  <i class="fa fa-github text-light"> B-end</i>
                  </a>
            </div>
           
          </div>
        </div>
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="card  bg-transparent border-dark">
       
            <img src={project7} class="img-fluid" alt="" />
            <div className='card-title text-center pt-2'><h4>TANSTACK QUERY WEATHER App</h4></div>
            <p className="text-center p-1"> React Js/ Typescript/ Shadcn/UI</p>
           
            <div className="card-footer text-center text-dark">
            <a href="https://github.com/KIRUBAHARAN8878M/tanstack-query-weather-ts" target='_blank' data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="F-code">
                  <i class="fa fa-github text-light"> F-end</i>
                  </a>
                <a href="https://tanstack-query-weather-ts.vercel.app/" target='_blank' data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox me-4" title="Deploy link">
                  <i class="fa fa-link text-success"> Live</i>
                  </a>
                  
            </div>
           
          </div>
        </div>
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="card  bg-transparent border-dark">
       
            <img src={project8} class="img-fluid" alt="" />
            <div className='card-title text-center pt-2'><h4>HABIT TRACKER App</h4></div>
            <p className="text-center p-1"> React Js/ Typescript/ Redux/ MUI</p>
           
            <div className="card-footer text-center text-dark">
            <a href="https://github.com/KIRUBAHARAN8878M/Tracker_ReduxFE" target='_blank' data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="F-code">
                  <i class="fa fa-github text-light"> F-end</i>
                  </a>
                <a href="https://trackerdaily.netlify.app/" target='_blank' data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox me-4" title="Deploy link">
                  <i class="fa fa-link text-success"> Live</i>
                  </a>
                  
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

