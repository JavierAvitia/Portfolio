// Include React
import React, { Component } from 'react';

const Project5 = (props) => (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">React NYT Scraper</h3>
        </div>
        <div className="panel-body">
          <a href="https://raspador.herokuapp.com/" target="_blank">
        <img src="public/assets/images/NYT.png" alt="NYTimes" className="p_img" />
        </a>
        <hr/>
          <ul>
              <li>Full-Stack Web App.</li>
              <li>Mongoose/MongoDB</li>
              <li>HandlebarsJS</li>
              <li>ExpressJS Server</li>
              <li>Heroku-Deployed</li>
          </ul>
        </div>
      </div>
)

export default Project5;