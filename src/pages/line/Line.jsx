
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <section m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <div className=" h-[75vh]">
        <LineChart />
      </div>
    </section>
  );
};

export default Line;