import React from 'react';

function Skills() {
  return (
    <div className="container card bg-transparent mt-1 p-5" id="skills" style={{ border: "1px solid #82b39c", boxShadow: "rgba(56, 90, 73, 0.75) 12px 8px 12px" }}>
      <h1 className="text-center myname">Skills</h1>
      <hr className="myname" />

      <div className="row row-cols-md-2 row-cols-lg-3 row-cols-sm-2 m-3">
        

        <div className="col mt-sm-2">
          <div className="card" id="skill-card">
            <i className="fa-brands fa-html5"></i>
            <div className="card-body">
              <p className="card-text">HTML5</p>
            </div>
          </div>
        </div>

        <div className="col mt-sm-2">
          <div className="card" id="skill-card">
            <i className="fa-brands fa-css3-alt"></i>
            <div className="card-body">
              <p className="card-text">CSS3</p>
            </div>
          </div>
        </div>
        <div className="col mt-sm-2">
          <div className="card" id="skill-card">
            <i className="fa-brands fa-js"></i>
            <div className="card-body">
              <p className="card-text">JavaScript</p>
            </div>
          </div>
        </div>

        <div className="col mt-sm-2">
          <div className="card" id="skill-card">
            <i className="fa-brands fa-react"></i>
            <div className="card-body">
              <p className="card-text">ReactJs</p>
            </div>
          </div>
        </div>

        <div className="col mt-sm-2">
          <div className="card" id="skill-card">
            <i className="fa-brands fa-bootstrap"></i>
            <div className="card-body">
              <p className="card-text">Bootstrap</p>
            </div>
          </div>
        </div>

        <div className="col mt-sm-2">
          <div className="card" id="skill-card">
            <i className="fa-brands fa-node"></i>
            <div className="card-body">
              <p className="card-text">Nodejs</p>
            </div>
          </div>
        </div>
        <div className="col mt-sm-2">
          <div className="card" id="skill-card">
            <iconify-icon icon="simple-icons:express" id="skill-lone"></iconify-icon>
            <div className="card-body">
              <p className="card-text">ExpressJs</p>
            </div>
          </div>
        </div>

        <div className="col mt-sm-2">
          <div className="card" id="skill-card">
            <i className="fa-brands fa-python"></i>
            <div className="card-body">
              <p className="card-text">Python</p>
            </div>
          </div>
        </div>
        <div className="col mt-sm-2">
          <div className="card" id="skill-card">
            <iconify-icon icon="simple-icons:flask" id="skill-lone"></iconify-icon>
            <div className="card-body">
              <p className="card-text">Flask</p>
            </div>
          </div>
        </div>
        <div className="col mt-sm-2">
          <div className="card" id="skill-card">
            <i className="fa-solid fa-database"></i>
            <div className="card-body">
              <p className="card-text">
                MySQL
                <img src="https://img.icons8.com/ios-filled/50/000000/mysql-logo.png" alt="MySQL" style={{ width: '20px', marginLeft: '10px' }} />
              </p>
            </div>
          </div>
        </div>

        <div className="col mt-sm-2">
          <div className="card" id="skill-card">
            <i className="fa-solid fa-database"></i>
            <div className="card-body">
              <p className="card-text">
                PostgreSQL
                <img src="https://img.icons8.com/color/48/000000/postgreesql.png" alt="PostgreSQL" style={{ width: '20px', marginLeft: '10px' }} />
              </p>
            </div>
          </div>
        </div>

        <div className="col mt-sm-2">
          <div className="card" id="skill-card">
            <i className="fa-solid fa-database"></i>
            <div className="card-body">
              <p className="card-text">
                MongoDB
                <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDB" style={{ width: '20px', marginLeft: '10px' }} />
              </p>
            </div>
          </div>
        </div>
        <div className="col mt-sm-2">
          <div className="card" id="skill-card">
            <i className="fa-brands fa-git-alt"></i>
            <div className="card-body">
              <p className="card-text">GitHub</p>
            </div>
          </div>
        </div>



        <div className="col mt-sm-2">
          <div className="card" id="skill-card">
            <iconify-icon icon="simple-icons:gitlab" id="skill-lone"></iconify-icon>
            <div className="card-body">
              <p className="card-text">GitLab</p>
            </div>
          </div>
        </div>
        <div className="col mt-sm-2">
          <div className="card" id="skill-card">
            <iconify-icon icon="simple-icons:bitbucket" id="skill-lone"></iconify-icon>
            <div className="card-body">
              <p className="card-text">Bitbucket</p>
            </div>
          </div>
        </div>
        <div className="col mt-sm-2">
          <div className="card" id="skill-card">
            <iconify-icon icon="simple-icons:postman" id="skill-lone"></iconify-icon>
            <div className="card-body">
              <p className="card-text">Postman</p>
            </div>
          </div>
        </div>
       

        <div className="col mt-sm-2">
          <div className="card" id="skill-card">
            <iconify-icon icon="simple-icons:cucumber" id="skill-lone"></iconify-icon>
            <div className="card-body">
              <p className="card-text">Cucumber</p>
            </div>
          </div>
        </div>

        <div className="col mt-sm-2">
          <div className="card" id="skill-card">
            <iconify-icon icon="simple-icons:selenium" id="skill-lone"></iconify-icon>
            <div className="card-body">
              <p className="card-text">Selenium</p>
            </div>
          </div>
        </div>      

        <div className="col mt-sm-2">
          <div className="card" id="skill-card">
            <iconify-icon icon="simple-icons:rabbitmq" id="skill-lone"></iconify-icon>
            <div className="card-body">
              <p className="card-text">RabbitMQ</p>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default Skills;
