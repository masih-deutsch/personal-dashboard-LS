import { create } from 'zustand';
import { persist } from 'zustand/middleware';


export const tableDataStore = create(persist(() => ({
  tableData: [],
}), { name: "tableData" })
);


export function setTableData(newData) {
  tableDataStore.setState({ tableData: [...newData] });
}


export function tableEditor(item) {
  tableDataStore.setState(s => {
    if (s.tableData.some(x => x.id === item.id)) {
      return { tableData: s.tableData.map(x => (x.id === item.id) ? item : x) };
    } else {
      return { tableData: [...s.tableData, { ...item, id: Date.now().toString() }] };
    }
  });
}

export function tableRemover(id) {
  tableDataStore.setState(s => ({ tableData: s.tableData.filter(x => x.id !== id) }));
}

export function tableSorter(sortType) {
  if (sortType === "task") tableDataStore.setState(s => ({ tableData: s.tableData.toSorted((a, b) => (a.task).localeCompare(b.task)) }));
  if (sortType === "date") tableDataStore.setState(s => ({ tableData: s.tableData.toSorted((a, b) => a.date.localeCompare(b.date)) }));
  if (sortType === "status") tableDataStore.setState(s => ({ tableData: s.tableData.toSorted((a, b) => (a.status) - (b.status)) }));
}