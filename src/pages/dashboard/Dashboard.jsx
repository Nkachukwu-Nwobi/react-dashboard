import React from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import { MdOutlineDownload } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import LineChart from '../../components/LineChart'
import ProgressGauge from "../../components/ProgressGauge";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <main className=" m-6">
      <section className=" flex justify-between items-center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <button
          onClick={() => alert("Download Reports Clicked!")}
          style={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
          }}
          className=" flex justify-center items-center w-[20%] font-bold p-2 text-[14px] hover:cursor-pointer hover:opacity-70"
        >
          <MdOutlineDownload className="size-6 mr-2" />
          DOWNLOAD REPORTS
        </button>
      </section>

      {/* grid */}

      <section className=" grid grid-cols-12 auto-rows-[140px] mt-2 gap-5 flex-wrap">

        {/* top row */}
          <div className="col-span-3 bg-white p-7 rounded-lg shadow-md " style={{ backgroundColor: colors.primary[400]}}>

            <StatBox title="12,361" subtitle="Emails sent" icon={<MdEmail style={{ color: colors.greenAccent[600]}} className=" size-6.5"/>} increase='+14%' progress={14} />
                      
          </div>
          <div className="col-span-3 bg-white p-7 rounded-lg shadow-md " style={{ backgroundColor: colors.primary[400]}}>

            <StatBox title="431,225" subtitle="Sales obtained" icon={<MdEmail style={{ color: colors.greenAccent[600]}} className=" size-6.5"/>} increase='+21%' progress={21} />
                      
          </div>
          <div className="col-span-3 bg-white p-7 rounded-lg shadow-md " style={{ backgroundColor: colors.primary[400]}}>

            <StatBox title="32,441" subtitle="New clients" icon={<MdEmail style={{ color: colors.greenAccent[600]}} className=" size-6.5"/>} increase='+5%' progress={5} />
                      
          </div>
          <div className="col-span-3 bg-white p-7 rounded-lg shadow-md " style={{ backgroundColor: colors.primary[400]}}>

            <StatBox title="32,441" subtitle="Traffic received" icon={<MdEmail style={{ color: colors.greenAccent[600]}} className=" size-6.5"/>} increase='+43%' progress={43} />
                      
          </div>

          {/* middle row */}
          <div className=" col-span-8 row-span-2" style={{ backgroundColor: colors.primary[400]}}>

            <div className=" mt-4 flex justify-between items-center px-7">
              <div className=" flex flex-col">
              <h5 style={{ color: colors.grey[100], fontWeight: '600', fontSize:'16px'}}>Revenue Generated</h5>
              <h3 style={{ color: colors.greenAccent[500], fontWeight: 'bold', fontSize:'18px'}}>$59,342.32</h3>
              </div>

              <div><MdOutlineDownload style={{ fontSize: '26px', color: colors.greenAccent[500]}}/></div>
            </div>

            <div className=" h-60"><LineChart isDashboard={true}/></div>
          </div>

          <div className=" col-span-4 row-span-2 overflow-y-auto" style={{ backgroundColor: colors.primary[400]}}>
            <h5 className="text-base font-semibold p-3.5" style={{ color: colors.grey[100]}}>Recent Transactions
            </h5>

            {
              mockTransactions.map((transaction, index) =>(
                <div style={{ borderBottom: `4px solid ${colors.primary[500]} `}} 
                key={`${transaction.txId}-${index}`} className=" flex justify-between items-center p-4">
                  <div className="">
                    <h5 style={{ color: colors.greenAccent[500], fontWeight: '600'}}>{transaction.txId}</h5>
                    <h5 style={{ color: colors.grey[100]}}>{transaction.user}</h5>
                  </div>
                  <div style={{ color: colors.grey[100]}}>{transaction.date}</div>
                  <div style={{ backgroundColor: colors.greenAccent[500], padding: "5px 10px", borderRadius: '4px'}}>{transaction.cost}</div>
                </div>
              ))
            }
          </div>

          {/* bottom row */}
          <div style={{ backgroundColor: colors.primary[400]}} className=" col-span-4 row-span-2 p-4">
            <h5 className=" text-base font-semibold">Campaign</h5>
            <div className=" flex flex-col items-center justify-center">
              <ProgressGauge progress={45} size={150}/>
              <h5 style={{ color: colors.greenAccent[500], fontSize: '16px', marginTop: '10px'}}>$48,352 revenue generated</h5>
              <p className=" text-base">Includes extra misc expenditures and costs</p>
            </div>
          </div>

          <div style={{ backgroundColor: colors.primary[400]}} className=" col-span-4 row-span-2 p-4">
            <h5 className=" text-base font-semibold">Sales Quantity</h5>
            <div className=" flex flex-col items-center justify-center h-[250px] -mt-[20px] p-0">
              <BarChart inDashboard={true} />
            </div>
          </div>

          <div style={{ backgroundColor: colors.primary[400]}} className=" col-span-4 row-span-2 p-4">
            <h5 className=" text-base font-semibold">Geography Based Traffic</h5>
            <div className=" flex flex-col items-center justify-center h-[250px] -mt-[20px] p-0">
              <GeographyChart isDashboard={true}/>
            </div>
          </div>
   
   

      </section>
    </main>
  );
}

export default Dashboard;
