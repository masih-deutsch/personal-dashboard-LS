import { useState } from "react";
import { useNavigate } from "react-router-dom";

import TableRows from "../Components/TableRows.jsx";
import TableModal from "../Components/TableModal.jsx";

import { tableDataStore, tableSorter } from '../Store/tableDataStore.jsx';



export default function ToDo() {

  const tableData = tableDataStore(s => s.tableData);

  const [isOpen, setISOpen] = useState(false);
  const [target, setTarget] = useState(null);
  const navigate = useNavigate();

  const [sortType, setSortType] = useState("");


  function ModalOpener() {
    setISOpen(true);
  }

  function ModalCloser() {
    setISOpen(false);
    setTarget(null);
  }


  return (
    <div className="w-[80%] my-10 mx-auto">
      <div className="flex flex-col md:flex-row w-[80%] mx-auto justify-between items-center bg-base-200 p-4 rounded-2xl shadow-lg gap-4 border border-base-300">
        <button onClick={() => navigate("/")} className="btn btn-outline btn-secondary w-full md:w-auto">
          <i className="fa-solid fa-arrow-left"></i>Back
        </button>

        <button onClick={ModalOpener} className="btn btn-primary shadow-md w-full md:w-auto px-10">
          <i className="fa-solid fa-plus"></i>Add New Task
        </button>

        <div className="flex items-center w-full md:w-auto justify-end">
          <div className="join w-full md:w-auto">
            <select className="select select-bordered join-item w-full md:w-auto" value={sortType || "date"} onChange={(e) => setSortType(e.target.value)}>
              <option value="task">By Task Name</option>
              <option value="date">By Date</option>
              <option value="status">By Status</option>
            </select>
            <button onClick={() => tableSorter(sortType || "date")} className="btn btn-info join-item">
              <i class="fa-solid fa-arrow-down-short-wide"></i>Sort
            </button>
          </div>
        </div>
      </div>

      <TableModal isOpen={isOpen} ModalCloser={ModalCloser} ModalOpener={ModalOpener} target={target} />

      <div className="overflow-x-visible flex gap-15 justify-center mt-20">
        <table className="rounded-2xl bg-base-200 shadow-2xl overflow-hidden text-neutral">
          <thead>
            <tr className="text-center text-warning-content font-extrabold text-2xl border-b border-neutral">
              <td className="p-5">Task</td>
              <td className="p-5">Date</td>
              <td className="p-5">Status</td>
              <td className="p-5">Action</td>
            </tr>
          </thead>
          {tableData.map(task => {
            return (
              <TableRows key={task.id} id={task.id} task={task.task} date={task.date} status={task.status} setTarget={setTarget} />
            );
          })}
        </table>
      </div>
    </div>
  );
}