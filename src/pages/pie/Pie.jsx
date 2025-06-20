import React from 'react'
import Header from '../../components/Header'
import PieChart from '../../components/PieChart'

function Pie() {
  return (
    <section className=' m-5'>
        <Header title="Pie Chart" subtitle="Simple Pie Chart" />
        <div className=" w-full h-[70vh]">
            <PieChart />
        </div>
    </section>
  )
}

export default Pie