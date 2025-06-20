import React from 'react'
import Header from '../../components/Header'
import BarChart from '../../components/BarChart'

function Bar() {
  return (
    <section className=' m-5'>
        <Header title="Bar Chart" subtitle="Simple Bar Chart" />
        <div className=" w-full h-[70vh]">
            <BarChart />
        </div>
    </section>
  )
}

export default Bar