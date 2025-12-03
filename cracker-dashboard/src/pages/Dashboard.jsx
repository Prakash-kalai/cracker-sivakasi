import Sidebar from "../components/Sidebar";
import CrackerAdd from "./CrackerAdd";
import Dash from "./Dash";
import { Route, Routes } from "react-router-dom";
import Orders from "./Orders";
import { orderGetData } from "../redux/features/ordrsSlice";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
const Dashboard = () => {
  const {data,loading}=useSelector((state)=>state.orders)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(orderGetData())
  },[])
  
  
  return (
    <div className="flex w-full">

      {/* Sidebar */}
      <div className="w-[15%] h-screen bg-gray-100 border-r">
        <Sidebar />
      </div>

      {/* Main Area */}
      <div className="w-[80%] p-5 overflow-auto">
        <Routes>
          <Route path="/" element={<Dash datalength={data}/>} />
          <Route path="/cracker" element={<CrackerAdd />} />
          <Route path="/orders" element={<Orders data={data} loading={loading}/>} />
        </Routes>
      </div>

    </div>
  );
};

export default Dashboard;
