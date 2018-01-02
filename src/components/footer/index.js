import React from 'react';

const date = new Date();

export default () => (
  <footer className="mastfoot">
    <div className="container">
      <p>Follow Us on Social Media</p>
      <ul>
        <li className="social-media-link">
          <a href="#" target="_blank">
            <img alt="Facebook" src="static/images/icons/fb.png" />
          </a>
        </li>
        <li className="social-media-link">
          <a href="#" target="_blank">
            <img alt="Instagram" src="static/images/icons/ig.png" />
          </a>
        </li>
        <li className="social-media-link">
          <a href="#" target="_blank">
            <img alt="Twitter" src="static/images/icons/twitter.png" />
          </a>
        </li>
      </ul>
      <p>
        <small>Copyright &copy; {date.getFullYear()} NoomaPress</small>
      </p>
    </div>
  </footer>
);
