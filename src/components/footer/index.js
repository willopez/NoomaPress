import React from 'react';

const date = new Date();

export default () => (
  <footer className="mastfoot">
    <div className="inner">
      <p>
        <small>Copyright &copy; {date.getFullYear()} NoomaPress</small>
      </p>
    </div>
  </footer>
);
