import React from "react";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

function Invoices() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", headerClassName: 'header', flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      headerClassName: 'header',
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
      headerClassName: 'header'
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      headerClassName: 'header'
    },
    {
      field: "cost",
      headerName: "Cost",
      headerClassName: 'header',
      flex: 1,
      renderCell: (params) => (
        <p style={{ color: colors.greenAccent[500]}}>${params.row.cost}</p>
      )
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
     
    },
    
  ];

  return (
    <main>
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <div className=" h-[75vh]" >
        <DataGrid
         rows={mockDataInvoices} 
         columns={columns}
         checkboxSelection
        sx={{
          width: '94%',
          margin: "2rem auto",
          height: '100%',
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: `${colors.blueAccent[700]} !important`,
            borderBottom: "none",
            fontWeight: "700",
            fontSize: "0.8rem",
            
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
        
        />
      </div>
    </main>
  );
}

export default Invoices;
