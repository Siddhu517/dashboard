import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BarGraph = ({ data }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!data) return;

    const svg = d3.select(containerRef.current);

    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, width]);

    const yScale = d3
      .scaleBand()
      .domain(data.map((d, i) => i))
      .range([0, height])
      .padding(0.1);

    svg
      .selectAll('.bar')
      .data(data)
      .join('rect')
      .attr('class', 'bar')
      .attr('x', 0)
      .attr('y', (d, i) => yScale(i))
      .attr('width', d => xScale(d))
      .attr('height', yScale.bandwidth())
      .on('click', d => {
        // Handle click event and display specific data for the clicked bar
        console.log(d);
      });
  }, [data]);

  return <svg ref={containerRef} />;
};
