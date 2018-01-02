import React from 'react';

const date = new Date();

export default () => (
  <footer className="footer">
    <div className="container">
      <p>Follow Us on Social Media</p>
      <ul>
        <li>
          <a href="#" target="_blank">
            <i className="fa fa-facebook" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <i className="fa fa-instagram" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <i className="fa fa-twitter" />
          </a>
        </li>
      </ul>
      <p>
        <small>Copyright &copy; {date.getFullYear()} NoomaPress</small>
      </p>
    </div>
  </footer>
);
