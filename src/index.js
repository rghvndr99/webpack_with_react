import React from 'react';
import ReactDOM from 'react-dom';

const title = 'my name is raghav but I am not a terrorist';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);
module.hot.accept();