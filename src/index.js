import React from 'react';
import {createRoot} from 'react-dom/client';

import DreamsProjects from './DreamsProjects';
import './styles/styles.scss'

const root = createRoot(document.getElementById("root"));
root.render(
  <DreamsProjects />
)