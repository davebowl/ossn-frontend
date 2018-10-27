/* eslint-disable */
/*
  LeaderToolList, LeaderTool and AllLeaderTools components.
  Appears at /leaders-corner.
*/
import React from 'react';

// Local modules.
import Layout2Col from './../../layouts/layout-2col/layout-2col';
import ShadowBox from './../shadow-box/shadow-box';

import './leader-tools-list.scss';
import './leader-tools.scss';

//  A single tool entry.
const LeaderTool = (props) => {
  console.log(props.tool);
  const title = props.tool.title;
  const icon = props.tool.imageUrl;
  const url = props.tool.link;

  return (
    <div className="leader-tool">
      <a href={url} className="leader-tool__link">
        <div className="leader-tool__title"> {title} </div>
      </a>
    </div>
  );
};

// Wraps a list of tools with title.
export const LeaderToolList = (props) => {

  const title = props.title;

  const tools = props.tools.map((tool, i) => {
    return <LeaderTool tool={tool} key={i} />
  });

  return (
    <div className="leader-tools-list__wrapper">
        <h2 className="leader-tools-list__title"> {title} </h2>
        <ShadowBox zeroRadius zeroPadding>
          <div className="leader-tools-list">
            {tools}
          </div>
      </ShadowBox>
    </div>
  )
};

// Wraps all the tool lists.
export const AllLeaderTools = (props) => {
  const variousTools = props.variousTools;
  const prManagement = props.prManagement;
  const codeOfConduct = props.codeOfConduct;
  const usefulResources = props.usefulResources;

  return (
    <Layout2Col verticalGutters horizontalGutters>
      <div>
        <LeaderToolList title="Project Management Tools" tools={prManagement} />
        <LeaderToolList title="Code of conduct" tools={codeOfConduct} />
        <LeaderToolList title="Various tools" tools={variousTools} />
      </div>
      <div>
        <LeaderToolList title="Useful resources running a club"
                        tools={usefulResources} />
      </div>
    </Layout2Col>
  )
};
