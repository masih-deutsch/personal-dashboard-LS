import { useEffect, useRef } from "react";
import { useForm } from 'react-hook-form';
import { tableEditor } from '../Store/tableDataStore';



function formatDate() {
  return new Date().toISOString().slice(0, 16);
};




export default function TableModal({ isOpen, ModalCloser, ModalOpener, target }) {

  const modal = useRef();

  const { register, handleSubmit, reset } = useForm();

  function myForm(data) {
    tableEditor({ ...data, status: JSON.parse(data.status), id: target?.id });
    reset();
    ModalCloser();
  }


  useEffect(() => {
    if (isOpen) {
      modal.current.showModal();
    } else {
      modal.current.close();
    }
  }, [isOpen]);


  useEffect(() => {
    if (target) {
      reset(target);
      ModalOpener();
    } else {
      reset({ task: "", date: formatDate(), status: "false" });
    }
  }, [target]);




  return (
    <dialog ref={modal} className="fixed inset-0 m-auto w-xl rounded-2xl shadow-2xl p-3 backdrop:bg-black/60 backdrop:backdrop-blur-sm">


      <div className="flex items-center justify-between border-b border-base-200 mb-8 pb-4">
        <h2 className="text-2xl font-bold text-base-content">Edit Task</h2>
        <button onClick={() => {
          ModalCloser();
          reset();
        }} className="btn btn-sm btn-circle btn-ghost text-base-content/60 hover:text-rose-500 hover:bg-rose-50">
          <i className="fas fa-times"></i>
        </button>
      </div>



      <form onSubmit={handleSubmit(myForm)} className='flex flex-col justify-center items-center gap-3'>

        <div className="floating-label w-full">
          <label className='label block'>Task Name:
            <input required type="text" placeholder="Give your day a title..." className="input w-full" {...register("task")} />
          </label>
        </div>

        <div className="flex w-full gap-5">
          <div className='floating-label w-full'>
            <label className="label flex flex-col">Date:
              <input required type="datetime-local" className="input" {...register("date")} />
            </label>
          </div>

          <div className='floating-label w-full'>
            <label className="label flex flex-col">Status:
              <select className="select" {...register("status")} >
                <option selected value="false">Pending</option>
                <option value="true">Completed</option>
              </select>
            </label>
          </div>
        </div>


        <div className="flex justify-end gap-3 mt-4 pt-6 border-t border-base-200">
          <button onClick={() => {
            ModalCloser();
            reset();
          }} type="button" className="btn btn-outline btn-md px-6">Cancel</button>
          <button type="submit" className="btn btn-secondary btn-md px-10">Save Entry</button>
        </div>
      </form>



    </dialog>
  );
}