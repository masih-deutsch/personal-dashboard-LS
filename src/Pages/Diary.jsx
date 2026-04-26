import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Cards from '../Components/DiaryList.jsx';
import Modal from '../Components/DiaryModal.jsx';

import { diaryDataStore, diarySorter } from '../Store/diaryDataStore';



export default function Diary() {

  const diaryData = diaryDataStore(s => s.diaryData);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [target, setTarget] = useState(null);
  const navigate = useNavigate();

  const [sortType, setSortType] = useState("");


  function ModalOpener() {
    setIsModalOpen(true);
  }

  function ModalCloser() {
    setIsModalOpen(false);
    setTarget(null);
  }


  return (
    <div className="w-[80%] my-10 mx-auto">
      <div className="flex flex-col md:flex-row w-[80%] mx-auto mb-15 justify-between items-center bg-base-200 p-4 rounded-2xl shadow-lg gap-4 border border-base-300">
        <button onClick={() => navigate("/")} className="btn btn-outline btn-secondary w-full md:w-auto">
          <i className="fa-solid fa-arrow-left"></i>Back
        </button>

        <button onClick={ModalOpener} className="btn btn-primary shadow-md w-full md:w-auto px-10">
          <i className="fa-solid fa-plus"></i>Add New Task
        </button>

        <div className="flex items-center w-full md:w-auto justify-end">
          <div className="join w-full md:w-auto">
            <select className="select select-bordered join-item w-full md:w-auto" value={sortType || "date"} onChange={(e) => setSortType(e.target.value)}>
              <option value="title">Title</option>
              <option value="date" selected>Date</option>
            </select>
            <button onClick={() => diarySorter(sortType || "date")} className="btn btn-info join-item">
              <i class="fa-solid fa-arrow-down-short-wide"></i>Sort
            </button>
          </div>
        </div>
      </div>


      <Modal isModalOpen={isModalOpen} ModalOpener={ModalOpener} ModalCloser={ModalCloser} target={target} />
      <div className=" flex flex-wrap gap-15 justify-center items-center">
        {diaryData.map((item, i) => {
          return (
            <Cards key={i} id={item.id} title={item.title} date={item.date} imageUrl={item.imageUrl} entryText={item.entryText}
              setTarget={setTarget} ModalOpener={ModalOpener} />
          );
        })}
      </div>
    </div>
  );
}