import { MdEdit, MdDelete } from "react-icons/md";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/features/crackerApiSlice";

const CrackerTable = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.cracker);

  useEffect(() => {
    dispatch(getData());
  }, []);

  // Delete cracker
  async function del(id) {
    try {
      const response = await axios.delete(`http://localhost:5000/api/crackers/${id}`);
      console.log("Deleted:", response.status);
      dispatch(getData());
    } catch (error) {
      console.error("Delete failed:", error);
    }
  }

  // Edit cracker
  async function edit(c) {
    try {
      const response = await fetch(`http://localhost:5000/api/crackers/${c._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(c), // <- send fields
      });

      const data = await response.json();
      console.log("Updated:", data);

      dispatch(getData()); // refresh UI
    } catch (error) {
      console.error("Edit failed:", error);
    }
  }

  return (
    <table className="cracker-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Cracker Name</th>
          <th>Price (₹)</th>
          <th>Stock</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.map((c, index) => (
          <tr key={c._id}>
            <td>{index + 1}</td>
            <td>{c.name}</td>
            <td>{c.price}</td>
            <td>{c.per}</td>

            <td className="text-center">
              {/* DELETE */}
              <button
                className="p-2 bg-gray-300 hover:bg-red-400 mx-1"
                onClick={() => del(c._id)}
              >
                <MdDelete />
              </button>

              {/* EDIT */}
              <button
                className="p-2 bg-gray-300 hover:bg-blue-500 mx-1"
                onClick={() => edit(c)}
              >
                <MdEdit />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CrackerTable;
