import { diaryRemover } from '../Store/diaryDataStore';


export default function Cards({ id, title, date, imageUrl, entryText, setTarget }) {


  return (
    <div className="card bg-base-200 text-neutral w-sm shadow-2xl hover:scale-107 transform transition-all duration-400 ease-in-out">
      <figure>
        <img src={imageUrl} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-title">{date.slice(0, 16).replaceAll('-', '/').replace('T', ' ')}</h2>
        <p className="line-clamp-2">{entryText}</p>
        <div className="card-actions justify-end">
          <button onClick={() => { diaryRemover(id); }} className="btn btn-error">Delete</button>
          <button onClick={() => setTarget({ id: id, title: title, date: date, imageUrl: imageUrl, entryText: entryText })}
            className="btn btn-info">Details</button>
        </div>
      </div>
    </div>
  );
}