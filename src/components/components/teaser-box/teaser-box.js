/*
  The template for announcements and job listing components.
*/

import React from 'react';

// local modules
import ShadowBox from './../shadow-box/shadow-box';

// utils
import {verboseDate} from './../../../utils/dates';

// styles
import './teaser-box.scss';

export const TeaserBox = (props) => {
  const resource = props.resource;
  const title = resource.title;
  const date = verboseDate(resource.date) ;
  const target = resource.link;
  const image = resource.imageUrl;

  const classes = [props.className, 'teaser-box'];
  return (
    <div className={classes.join(' ')} >
      <a href={target} className="teaser-box__wrapper-link">

        <ShadowBox smallPaddings>
          <div className="teaser-box__inner">
            <div className="teaser-box__image-wrapper">
              <img src={image} alt="external resource" className="teaser-box__image"/>
            </div>
            <div className="teaser-box__text">
              <div className="teaser-box__title"> {title} </div>
              <span className="teaser-box__date"> {date} </span>
            </div>
          </div>
        </ShadowBox>
      </a>
    </div>
  );
};

export const TeaserBoxList = (props) => {

  const resources = props.items.map((resource, i) => {
    return <TeaserBox key={i} resource={resource} />
  });

  return (
    <div className="teaser-box__list-wrapper">
      {resources}
    </div>
  )
}

// export ExternalResource;
// export ExternalResourceList;
