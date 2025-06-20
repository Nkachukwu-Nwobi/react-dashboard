import React from 'react'
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

function ProgressGauge({ progress, size = 70 }) {
  console.log('progress', progress);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
  return (
          <Gauge
            cornerRadius="50%"
            width={size}
            height={size}
            value={30 + progress}
            skipAnimation={false}
            sx={(theme) => ({
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 10,
                display: 'none'
              },
              [`& .${gaugeClasses.valueArc}`]: {
                fill: colors.greenAccent[500],
              },
              [`& .${gaugeClasses.referenceArc}`]: {
                fill: colors.blueAccent[500],
              },
            })}
          />
  )
}

export default ProgressGauge