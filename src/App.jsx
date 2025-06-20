import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Team from "./pages/team/Team";
import Contacts from "./pages/contacts/Contacts";
import Invoices from "./pages/invoices/Invoices";
import Form from "./pages/form/Form";
import Form1 from "./pages/form/Form1";
import Calendar from "./pages/calendar/Calendar";
import Faqs from "./pages/faqs/Faqs";
import Bar from './pages/bar/Bar'
import Pie from "./pages/pie/Pie";
import Line from "./pages/line/Line";
import Geography from "./pages/geography/Geography";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<MainLayout />} >
          
              <Route index element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts/>} />
              <Route path="/invoices" element={<Invoices/>} />
              <Route path="/form" element={<Form/>} />
              {/* <Route path="/form" element={<Form1/>} /> */}
              <Route path="/calendar" element={<Calendar/>} />
              <Route path="/faq" element={<Faqs/>} />
              <Route path="/bar" element={<Bar/>} />
              <Route path="/pie" element={<Pie/>} />
              <Route path="/line" element={<Line/>} />
              <Route path="/geography" element={<Geography/>} />

          
          </Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
