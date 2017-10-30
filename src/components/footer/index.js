import React from 'react';

const date = new Date();

export default () => (
  <footer className="mastfoot">
    <div className="inner">
      <p>Copyright &copy; {date.getFullYear()} Company</p>
    </div>
  </footer>
);
