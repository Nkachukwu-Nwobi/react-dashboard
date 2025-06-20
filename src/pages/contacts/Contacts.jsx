import React from "react";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";

function Contacts() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", headerClassName: 'header', flex: 0.5 },
    {
      field: "registrarId",
      headerName: "Registrar ID",
      headerClassName: 'header',
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      headerClassName: 'header',
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      headerClassName: 'header'
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
      field: "address",
      headerName: "Address",
      flex: 1,
      headerClassName: 'header'
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
      headerClassName: 'header'
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
      headerClassName: 'header'
    },
    
  ];

  return (
    <main>
      <Header title="CONTACTS" subtitle="List of contacts for Future Reference" />
      <div className=" h-[75vh]" >
        <DataGrid
         rows={mockDataContacts} 
         columns={columns}
         slots={{ toolbar: GridToolbar }}
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
          "& .MuiDataGrid-toolbarContainer": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
            padding: " 0.5rem"
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
        
        />
      </div>
    </main>
  );
}

export default Contacts;
