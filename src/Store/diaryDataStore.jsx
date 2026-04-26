import { create } from 'zustand';
import { persist } from 'zustand/middleware';


export const diaryDataStore = create(persist(() => ({
  diaryData: []
}), { name: "diaryData" })
);


export function setDiaryData(newData) {
  diaryDataStore.setState({ diaryData: [...newData] });
}


export function diaryEditor(item) {
  diaryDataStore.setState(s => {
    if (s.diaryData.some(x => x.id === item.id)) {
      return { diaryData: s.diaryData.map(x => (x.id === item.id) ? item : x) };
    } else {
      return { diaryData: [...s.diaryData, { ...item, id: Date.now().toString() }] };
    }
  });
}

export function diaryRemover(id) {
  diaryDataStore.setState(s => ({ diaryData: s.diaryData.filter(x => x.id !== id) }));
}

export function diarySorter(sortType) {
  if (sortType === "title") diaryDataStore.setState(s => ({ diaryData: s.diaryData.toSorted((a, b) => (a.title).localeCompare(b.title)) }));
  if (sortType === "date") diaryDataStore.setState(s => ({ diaryData: s.diaryData.toSorted((a, b) => (a.date).localeCompare(b.date)) }));
}

// export function diaryEditor(item) {

//   if (diaryDataStore.getState().diaryData.some(x => x.id === item.id)) {
//     diaryDataStore.setState(s => ({ diaryData: s.diaryData.map(x => (x.id === item.id) ? item : x) }));
//   } else {
//     diaryDataStore.setState(s => ({ diaryData: [...s.diaryData, { ...item, id: Date.now().toString() }] }));
//   }
// }