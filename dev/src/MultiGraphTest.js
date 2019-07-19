import React from "react";
import ContainerDimensions from "react-container-dimensions";

import Graph from "../../src/directed/ForceDirectedGraph";
import graphData from "./graph-data";

const FIXED_WIDTH_HEIGHT = {
  width: "100%",
  height: "800px"
};
const WRAPPER_CLASS = {
  width: "100%",
  height: "100%"
};

const MultiGraphTest = () => (
  <div style={FIXED_WIDTH_HEIGHT}>
    <div style={WRAPPER_CLASS}>
      <ContainerDimensions>
        {({ width, height }) => {
          let config = {
            width: width,
            height: height,
            nodeHighlightBehavior: true,
            highlightDegree: 1,
            highlightOpacity: 0.25
          };
          return <Graph id="test-graph" data={graphData} config={config} />;
        }}
      </ContainerDimensions>
    </div>
  </div>
);

export default MultiGraphTest;
