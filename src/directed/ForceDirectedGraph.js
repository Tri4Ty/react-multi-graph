import React, { Component } from "react";
import PropTypes from "prop-types";
import { Graph } from "react-d3-graph";

class ForceDirectedGraph extends Component {
  render() {
    let { id, data, config } = this.props;

    return <Graph id={id} data={data} config={config} />;
  }
}
export default ForceDirectedGraph;

ForceDirectedGraph.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.shape({
    nodes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
      })
    ).isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        source: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        target: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired
      })
    )
  }),
  config: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  })
};
