import { useEffect, useRef } from "react";
import { useForm } from 'react-hook-form';
import { diaryEditor } from '../Store/diaryDataStore';



function formatDate() {
  return new Date().toISOString().slice(0, 16);
};




export default function Modal({ isModalOpen, ModalOpener, ModalCloser, target }) {

  const modal = useRef();

  const { register, handleSubmit, reset, watch } = useForm();

  const currentImageUrl = watch("imageUrl", "");
  const currentEntryText = watch("entryText", "");

  function myForm(data) {
    diaryEditor({ ...data, id: target?.id });
    reset();
    ModalCloser();
  }


  useEffect(() => {
    if (isModalOpen) {
      modal.current.showModal();
    } else {
      modal.current.close();
    }
  }, [isModalOpen]);


  useEffect(() => {
    if (target) {
      reset(target);
      ModalOpener();
    } else {
      reset({ title: "", date: formatDate(), imageUrl: "", entryText: "" });
    }
  }, [target]);




  return (

    <dialog ref={modal} className="fixed inset-0 m-auto w-xl rounded-2xl shadow-2xl p-3 backdrop:bg-black/70 backdrop:backdrop-blur-md">

      <div className="flex items-center justify-between border-b border-base-200 mb-8 pb-4">
        <h2 className="text-2xl font-bold text-base-content">Create New Diary Entry</h2>
        <button className="btn btn-sm btn-circle btn-ghost text-base-content/60 hover:text-rose-500 hover:bg-rose-50"
          onClick={() => {
            ModalCloser();
            reset();
          }}>
          <i className="fas fa-times"></i>
        </button>
      </div>

      <form onSubmit={handleSubmit(myForm)} className='flex flex-col justify-center items-center gap-3'>

        <div className="floating-label w-full">
          <label className='label block'>Title:
            <input required type="text" placeholder="Give your day a title...(Required)" className="input w-full" {...register("title")} />
          </label>
        </div>

        <div className='floating-label w-full'>
          <label className="label block">Date:
            <input required type="datetime-local" className="input" {...register("date")} />
          </label>
        </div>


        <div className="flex flex-col self-start gap-2 w-full">
          <div className='floating-label w-full'>
            <label className="label block">Image URL:
              <div className="grid grid-cols-[1fr_auto_auto] gap-2 items-start">
                <input type="text" placeholder="Paste an image URL here...(Optional)" className="input w-full" {...register("imageUrl")} />
                <button type="button" className="btn btn-outline bg-base-200 ">Add Photo +</button>
                {currentImageUrl ?
                  (<img className="w-12 h-12 rounded-lg object-cover" src={currentImageUrl} alt="Selected" />)
                  :
                  (<div className="skeleton h-12 w-12 rounded-lg"></div>)}
              </div>
            </label>
          </div>
        </div>


        <div className="floating-label w-full">
          <label className="label">What happened today?</label>
          <textarea required className="textarea textarea-md w-full h-48" placeholder="Write your entry here...(Required)" {...register("entryText")}>
          </textarea>
          <div className="label self-end text-sm text-base-content/60">
            <span className="label-text-alt">{currentEntryText.length} characters</span>
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