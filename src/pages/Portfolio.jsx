import React from 'react';
import { Link } from 'react-router-dom';
import Portals from '../components/Portals';

export default function Portfolio() {
  return (
    <div className="bg text-primary d-flex justify-content-center row text-center" >
    <h2>
        Portfolio
    </h2>
    <div className=" d-flex justify-content-center">
      <div className="row img-fluid">
        <Portals title="DnD Character Generator" imageSrc="../src/assets/DNDSheet.jpg" link="https://damascuskraken.github.io/CodingCampaign/"  />
        <Portals title="Weather App" imageSrc="../src/assets/WeatherApp.jpg" link="https://damascuskraken.github.io/WeatherDashboard/" />
        <Portals title="Password Generator" imageSrc="../src/assets/passGenerator.jpg" link="https://damascuskraken.github.io/PasswordGenerator/" />
        <Portals title="Mock Business Webpage" imageSrc="../src/assets/mockBusiness.jpg" link="https://damascuskraken.github.io/HoriseonMarketing/" />
        <Portals title="Code Quiz" imageSrc="../src/assets/CodeQuiz.jpg" link="https://damascuskraken.github.io/CodeQuiz/" />
        <Portals title="Day Scheduler" imageSrc="../src/assets/workDay.jpg" link="https://damascuskraken.github.io/WorkDayScheduler/" />
        
      </div>
    </div>
    </div>
  );
}