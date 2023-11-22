import SurveyNilu1 from './survey.js';
import SurveyEthan1 from './survey-ethan1.js';
import React, { useState } from 'react';
import '../css/survey_options.css'

function SurveyOptionContainer({SurveyElement, Icon, FeaturesList}) {
  return (
    <>
    <SurveyElement />
    </>
  )
}

function SurveyOptionsContainer() {

  return (
    <>
    <SurveyOptionContainer SurveyElement={SurveyNilu1} Icon="" FeaturesList={{0: "a", 1: "b", 2: "c"}} />
    </>
  );
}

export default SurveyOptionsContainer;
/*
import React from "react";
import Figure from './Figure';
import { render } from "react-dom";

const App = () => {
  const figures = [
    {
      config: 112,
      description: "description text 1"
    },
    {
      config: 787,
      description: "description text 2"
    }
  ];

  return (
    <div>

      { 
        figures.map((figure, key) => {
          return <Figure key={key} {...figure}/>
        })
      }

    </div>
  );
};

render(<App />, document.getElementById("root"));

And create a component called Figure like this:

import React from "react";

const Figure = (props) => {
   return (
    <div>
     <p>{props.description}</p>
     <p>{props.config}</p>
    </div>
  );
};

export default Figure;
*/
