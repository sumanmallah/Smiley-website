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
