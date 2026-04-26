import { tableRemover } from '../Store/tableDataStore';


export default function TableRows({ id, task, date, status, setTarget }) {

  return (
    <tbody className=" text-center">
      <tr className=" hover:bg-base-300">
        <td className=" px-10 py-2">
          <span>{task}</span>
        </td>
        <td className=" px-10 py-2">
          <span>{date.slice(0, 16).replaceAll('-', '/').replace('T', ' ')}</span>
        </td>
        <td className=" px-10 py-2">
          <span className={status ? "text-green-700" : "text-yellow-700"}>{status ? "Completed" : "Pending"}</span>
        </td>
        <td className="flex gap-2 px-10 py-2">
          <button onClick={() => setTarget({ id: id, task: task, date: date, status: status })} className="btn btn-warning px-6">Edit</button>
          <button onClick={() => { tableRemover(id); }} className="btn btn-error px-4">Delete</button>
        </td>
      </tr>
    </tbody>
  );
}