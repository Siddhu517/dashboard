import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';

const WorldMap = () => {
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    // load the map data
    d3.json('/world-map-data.json').then(data => {
      setMapData(data);
    });
  }, []);

  return (
    <svg width="960" height="500">
      {mapData && (
        <g>
          {mapData.features.map(feature => (
            <path
              d={d3.geoPath().projection(d3.geoMercator())(feature)}
              fill={feature.properties.color}
            />
          ))}
        </g>
      )}
    </svg>
  );
};
