import StatCard from "../components/StateCard";
import CrackerTable from "../components/CrackerTable";
import { useDispatch,useSelector } from "react-redux";
import { getData } from "../redux/features/crackerApiSlice";
import { useEffect } from "react";

const Dash = ({datalength}) => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.cracker);
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div className="">

      <div className="">
        <h1>Dashboard</h1>
      
        <div className="stats-row">
          <StatCard title="Total Crackers" value={data?.length} />
          <StatCard title="Today's Orders" value={datalength?.length} />
          <StatCard title="Revenue" value="₹25,300" />
        </div>

        <h2>Crackers Inventory</h2>
        <CrackerTable />
      </div>
    </div>
  );
};

export default Dash;
