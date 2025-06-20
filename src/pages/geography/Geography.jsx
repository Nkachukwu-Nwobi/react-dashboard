import { useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <section m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <div className=" h-[75vh] rounded-[4px] border" style={{ color: colors.grey[100] }}>
        <GeographyChart />
      </div>
    </section>
  );
};

export default Geography;