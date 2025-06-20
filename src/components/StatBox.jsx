import React from 'react'
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressGauge from './ProgressGauge'


function StatBox({ icon, title, subtitle, increase, progress}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <section className=' flex justify-between items-center'>

        <div className='flex flex-col gap-1 items-start justify-center'>
            {icon}
            <h4 className="font-bold text-lg">{title}</h4>
            <h5 style={{ color: colors.greenAccent[400]}} className=" font-semibold text-base" >{subtitle}</h5>
        </div>

        <div className=' flex flex-col items-center '>
            <ProgressGauge progress={progress} />
            <h5 style={{ color: colors.greenAccent[600], fontStyle: "italic", fontSize: '14px'}}>{increase}</h5>
        </div>
        
    </section>
  )
}

export default StatBox