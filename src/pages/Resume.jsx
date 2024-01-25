
import { Link } from "react-router-dom";


export default function ResumePage() {
  return (
    <div className="resume-page">
      <div className="d-flex justify-content-center ">
      <h2>Resume</h2>
      </div>

      <div className="ms-5">
        <h2 className="text-center d-flex ms-4" >Employment History</h2>
        <br></br>

        <h4> Amazon Fullfillment Center, San Marcos, TX</h4>
          <h5 className="ms-3"> Amazon Associate, Process Assistant </h5>
          <h6 className="ms-3"> April/2022 - present </h6>
          <ul>
            <li>Nurture team members for enhanced productivity while upholding high-quality standards, ensuring timely fulfillment of retail orders for end consumers.</li>
            <li>Address and troubleshoot receiving errors, contributing to effective inventory management.</li>
            <li>Take charge of overseeing the production floor in the absence of the Area Manager and Process Assistant.</li>
          </ul>

          <h4> JR. Ramon Demolition, San Anotnio, TX</h4>
          <h5 className="ms-3"> Warehouse Manager </h5>
          <h6 className="ms-3"> May/2022 - Aug/2022 </h6>
          <ul>
            <li>Manage Inventory Control</li>
            <ul>
              <li>Ordering baseline inventory</li>
              <li>Parts for machine, includes worksparts and repair kits</li>
              <li>Niche items/materials for specialized jobs</li>
            </ul>
            <li>Responsible for install and maintaining a working inventory tracker.</li>
            <li>High Stress/ Fast paced Envirorment</li>
            <li>Dead-line Oriented Envirorment</li>
          </ul>

          <h4>Anthony Torres Demolition, Pomona, CA</h4>
          <h5 className="ms-3"> Shop Foreman </h5>
          <h6 className="ms-3"> Jan/2016 - Dec/2019 </h6>
          <ul>
            <li>Conduct Prevenative Maintainence</li>
            <li>Implement loss preventation measures</li>
            <li>Perform in-field troubleshooting</li>
            <li>Hanlde ordering of inventory</li>
            <li>High Stress/ Fast paced Envirorment</li>
          </ul>
        
        <div class="container">
  <div class="row">
  <h2> Skills</h2>
    <div class="col-4 col-sm-2"> 
          <ul>
            <li>Sequalize</li>
            <li>Mongo DB</li>
            <li>Express</li>
            <li>React</li>
            <li>Node.js</li>
            <li>SQL</li>
          </ul>
      </div>
    <div class="col-4 col-sm-2">
          <ul>
            <li>GitLab</li>
            <li>Git</li>
            <li>HTML/CSS</li>
            <li>C#</li>
            <li>Javascript</li>
          </ul>
    </div>
  </div>
</div>
        <br></br>

        <h3>Education</h3>
        <br></br>
        <h4 className="ms-5"> Computer Science, San Antonio College, San Antonio</h4>
        <h5 className="ms-5"> Associates of Science in Computer Science</h5>
        <br></br>
        <h4 className="ms-5">Coding, UTSA BootCamp Full Stack Development, San Antonio</h4>
      </div>
    </div>
  );
}
