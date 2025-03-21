import React from 'react';
import { Svg, Path } from 'react-native-svg';

export const SimpleLineChart = ({ data, width, height, color }) => {
  if (!data || data.length < 2) return null;

  const minY = Math.min(...data);
  const maxY = Math.max(...data);
  const range = maxY - minY;
  
  const xStep = width / (data.length - 1);
  const points = data.map((value, index) => ({
    x: index * xStep,
    y: height - ((value - minY) / range) * height
  }));

  let path = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    path += ` L ${points[i].x} ${points[i].y}`;
  }

  return (
    <Svg width={width} height={height}>
      <Path
        d={path}
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
    </Svg>
  );
}; 