import React from 'react';
import { Link } from 'react-router-dom';
import Project from '../components/Project';

export default function Portfolio() {
  return (
    <div className="bg text-primary d-flex justify-content-center row text-center" >
    <h2>
        Portfolio
    </h2>
    <div className=" d-flex justify-content-center">
      <div className="row">
        <Project title="DnD Character Generator" imageSrc="/assets/" link="https://damascuskraken.github.io/CodingCampaign/"  />
        <Project title="Weather App" imageSrc="/assets/" link="https://damascuskraken.github.io/WeatherDashboard/" />
        <Project title="Password Generator" imageSrc="/assets/" link="https://damascuskraken.github.io/PasswordGenerator/" />
        <Project title="Mock Business Webpage" imageSrc="/assets/" link="https://damascuskraken.github.io/HoriseonMarketing/" />
        <Project title="Code Quiz" imageSrc="/assets/" link="https://damascuskraken.github.io/CodeQuiz/" />
        <Project title="Day Scheduler" imageSrc="/assets/" link="https://damascuskraken.github.io/WorkDayScheduler/" />
        
      </div>
    </div>
    </div>
  );
}