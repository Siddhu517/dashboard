import React, { useState, useRef, useEffect } from "react";
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7.7.0/+esm";

const BarGraph = ({ filterData, onClick }) => {
  const chartRef = useRef();

  useEffect(() => {
    // remove the old chart elements
    d3.select(chartRef.current).selectAll("*").remove();

    if (filterData && filterData.length > 0) {
      // set the dimensions of the chart
      const width = 780;
      const height = 270;
      const margin = { top: 20, right: 10, bottom: 100, left: 40 };

      // remove the old chart elements
      d3.select(chartRef.current).selectAll("*").remove();

      // create the chart
      const chart = d3
        .select(chartRef.current)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

      // set the scale for the x-axis
      const xScale = d3
        .scaleBand()
        .rangeRound([0, width])
        .padding(0.1)
        .domain(filterData.map((d) => d.topic));

      // set the scale for the y-axis
      const yScale = d3
        .scaleLinear()
        .rangeRound([height, 0])
        .domain([0, d3.max(filterData, (d) => d.intensity)]);

      // create the x-axis
      chart
        .append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(xScale))
        // increase the font size of the y-axis tick labels
        .selectAll(".tick")
        .style("font-size", "16px")
        // rotate the tick labels to prevent overlap
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-34)");

      // create the y-axis
      chart
        .append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(yScale).ticks(10))
        // increase the font size of the y-axis tick labels
        .selectAll(".tick")
        .style("font-size", "16px");

      // create the bars
      chart
        .selectAll(".bar")
        .data(filterData)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", (d) => xScale(d.topic))
        .attr("y", (d) => yScale(d.intensity))
        .attr("width", xScale.bandwidth())

        .attr("height", (d) => height - yScale(d.intensity))
        .attr("fill", "steelblue")
        .on("click", function (d, i) {
          // toggle the color of the clicked bar
          const currentColor = d3.select(this).attr("fill");
          const newColor = currentColor === "steelblue" ? "red" : "steelblue";
          d3.select(this).attr("fill", newColor);

          // call the onClick prop function
          onClick(d, i);
        });
    }
  }, [filterData, onClick]);

  return (
    <div
      className="mt-2 ms-2"
      style={{
        border: "2px solid red",
        minHeight: "24.5rem",
        minWidth: "52rem",
      }}
    >
      {filterData && filterData.length === 0 && (<>
        <div className="error-message mt-4 ms-4 h2">No data found</div>
        <div className="ms-4 mt-4">  **** Clicking on a single bar in the bar graph will display the content in the designated section. **** </div>
        </>
      )}
      <div ref={chartRef} />
    </div>
  );
};

export default BarGraph;
