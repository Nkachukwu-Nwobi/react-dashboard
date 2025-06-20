import React from 'react'
import { tokens } from '../theme'
import { useTheme } from "@mui/material";

function Header({ title, subtitle}) {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  return (
    <div className=' w-[94%] mx-auto my-4'>
        <h2 className=' font-bold mb-1.5 text-3xl' style={{ color: colors.grey[100]}}>{title}</h2>
        <h5 style={{ color: colors.greenAccent[400]}}>{subtitle}</h5>
    </div>
  )
}

export default Header