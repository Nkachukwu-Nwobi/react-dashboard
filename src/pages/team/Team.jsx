import React from "react";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

function Team() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", headerClassName: 'header', },
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
      field: "accessLevel",
      headerName: "Access Level",
      headerAlign: "center",
      align: "left",
      flex: 1,
      headerClassName: 'header',
      renderCell: ({ row: { access } }) => {
        return (
          <div
            className=" w-[90%] mx-auto flex justify-center items-center gap-4 py-1 px-2 h-[80%] mt-[2%] rounded-[15px]"
            style={{
              backgroundColor:
                access === "admin"
                  ? colors.greenAccent[800]
                  : access === "manager"
                  ? colors.greenAccent[600]
                  : colors.greenAccent[600],
            }}
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <p style={{ color: colors.grey[100] }}>{access}</p>
          </div>
        );
      },
    },
  ];

  return (
    <main>
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <div className=" h-[75vh]" >
        <DataGrid
         rows={mockDataTeam} 
         columns={columns}
        // initialState={{
        //   pagination: {
        //     paginationModel: {
        //       pageSize: 10,
        //     },
        //   },
        // }}
        // pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{
          width: '94%',
          margin: "2rem auto",
          height: '100%',
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .header":{
            backgroundColor: colors.blueAccent[700] ,
            fontWeight: "700",
            fontSize: "0.8rem",
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

export default Team;
