import { useEffect } from "react";
import { Link } from "react-router-dom";
import { tableDataStore, setTableData } from '../Store/tableDataStore';
import { diaryDataStore, setDiaryData } from '../Store/diaryDataStore';
diaryDataStore;

const todoExp = [
  {
    "id": "1",
    "task": "Relay Coordination update",
    "date": "2026-02-27T04:21",
    "status": true
  },
  {
    "id": "2",
    "task": "Short Circuit Analysis",
    "date": "2026-03-10T11:17",
    "status": true
  },
  {
    "id": "3",
    "task": "Power Factor Correction",
    "date": "2026-03-31T00:17",
    "status": false
  },
  {
    "id": "4",
    "task": "Solar Inverter Maintenance",
    "date": "2026-04-10T05:17",
    "status": false
  },
  {
    "id": "5",
    "task": "Transformer Oil Testing",
    "date": "2026-04-25T09:30",
    "status": true
  },
  {
    "id": "6",
    "task": "Arc Flash Hazard Assessment",
    "date": "2026-05-05T14:45",
    "status": true
  },
  {
    "id": "7",
    "task": "Harmonic Distortion Measurement",
    "date": "2026-05-20T10:00",
    "status": false
  },
  {
    "id": "8",
    "task": "Grounding Grid Resistance Test",
    "date": "2026-06-02T08:20",
    "status": true
  },
  {
    "id": "9",
    "task": "Battery Bank Capacity Check",
    "date": "2026-06-15T16:40",
    "status": false
  },
  {
    "id": "10",
    "task": "Load Flow Optimization",
    "date": "2026-07-01T11:10",
    "status": true
  }
];

const diaryExp = [
  {
    "id": "1",
    "title": "A Sunny Walk in the Park",
    "date": "2026-02-27T04:21",
    "imageUrl": "https://picsum.photos/seed/park1/600/400",
    "entryText": "The weather was amazing today. I found a hidden trail covered in ivy. I walked for about two hours and listened to a great podcast. I feel very relaxed."
  },
  {
    "id": "2",
    "title": "Trying the New Cafe",
    "date": "2026-03-10T11:17",
    "imageUrl": "https://picsum.photos/seed/cafe1/600/400",
    "entryText": "I finally had the time to visit that new cafe that opened downtown. Their coffee wasn't bad, but the croissant I ordered was incredible! I decided to come back here next week with a friend."
  },
  {
    "id": "3",
    "title": "Movie Night and Popcorn",
    "date": "2026-03-31T00:17",
    "imageUrl": "https://picsum.photos/seed/movie1/600/400",
    "entryText": "Tonight I decided to do nothing and just relax. I made a big bowl of popcorn and watched Inception for the third time. I still find new details in it!"
  },
  {
    "id": "4",
    "title": "Progress on the React Project",
    "date": "2026-04-10T05:17",
    "imageUrl": "https://picsum.photos/seed/code1/600/400",
    "entryText": "Today I managed to make a lot of progress on the personal diary project. Working with States and TailwindCSS was much more fascinating than I thought. I finally succeeded in opening and closing the modal without any bugs."
  },
  {
    "id": "5",
    "title": "Morning Yoga Session",
    "date": "2026-04-18T07:30",
    "imageUrl": "https://picsum.photos/seed/yoga5/600/400",
    "entryText": "Started the day with a 40-minute yoga flow. My flexibility is slowly improving. It's a great way to clear my mind before the workday starts."
  },
  {
    "id": "6",
    "title": "Baking Sourdough Bread",
    "date": "2026-05-02T14:20",
    "imageUrl": "https://picsum.photos/seed/bread6/600/400",
    "entryText": "The kitchen smells like a bakery! My sourdough starter finally worked perfectly. The crust is crunchy and the inside is so soft. Best bread I've ever made."
  },
  {
    "id": "7",
    "title": "Weekend Hiking Trip",
    "date": "2026-05-15T18:45",
    "imageUrl": "https://picsum.photos/seed/mountain7/600/400",
    "entryText": "Reached the summit just before sunset. The view of the valley was breathtaking. Took some amazing photos and shared a hot tea with the group."
  },
  {
    "id": "8",
    "title": "Late Night Reading",
    "date": "2026-05-28T23:10",
    "imageUrl": "https://picsum.photos/seed/book8/600/400",
    "entryText": "I got lost in a sci-fi novel tonight. The concept of time travel in this book is so unique. I intended to read for 20 minutes but ended up finishing 5 chapters."
  },
  {
    "id": "9",
    "title": "Gardening and New Plants",
    "date": "2026-06-12T10:00",
    "imageUrl": "https://picsum.photos/seed/garden9/600/400",
    "entryText": "Spent the morning repotting my succulents and planting some basil seeds. There's something very grounding about working with soil and plants."
  },
  {
    "id": "10",
    "title": "Stargazing at the Lake",
    "date": "2026-06-25T22:30",
    "imageUrl": "https://picsum.photos/seed/stars10/600/400",
    "entryText": "Drove out to the lake to escape the city lights. The Milky Way was visible tonight. It makes you realize how vast the universe really is. Truly magical."
  }
];

export default function Home() {


  const diaryData = diaryDataStore(s => s.diaryData);
  const tableData = tableDataStore(s => s.tableData);



  useEffect(() => {
    if (diaryData.length === 0) {
      setDiaryData(diaryExp);
    }
  }, []);

  useEffect(() => {
    if (tableData.length === 0) {
      setTableData(todoExp);
    }
  }, []);






  return (
    <div className="flex flex-col items-center justify-center p-4">

      <h1
        className="text-5xl font-extrabold tracking-widest text-shadow-md my-10 bg-clip-text text-transparent bg-linear-to-r from-primary to-accent">
        Personal Dashboard
      </h1>

      <div className="w-3/4 mx-auto">

        <div className="card lg:card-side flex bg-base-200 shadow-2xl rounded-4xl border-2 border-base-300">
          <figure className="flex-[60%]">
            <img className="object-center w-[95%] h-[95%] rounded-4xl shadow-lg" src="https://images.pexels.com/photos/6969314/pexels-photo-6969314.jpeg"
              alt="Album" />
          </figure>
          <div className="card-body flex-[40%] self-center justify-center items-center gap-8">

            <Link to="/diary">
              <div className="hover-3d">
                <div className="card w-96 bg-base-300 shadow-2xl text-center rounded-4xl">
                  <div className="card-body">
                    <span className="badge badge-xs badge-warning">Ongoing</span>
                    <div className="flex justify-between">
                      <h2 className="text-3xl font-bold">Daily Diary</h2>
                      <span className="text-lg">Total Entries: {diaryData.length}</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                      <li>
                        <i className="fa-solid fa-check fa-2xl"></i>
                        <span>Capture the essence of your day ✍️</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-check fa-2xl"></i>
                        <span>A safe space for your thoughts 📖</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-check fa-2xl"></i>
                        <span>Turn your days into memories ✨</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-check fa-2xl"></i>
                        <span>Clear your mind, track your growth 🌱</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <button className="btn btn-primary btn-block">Open Diary</button>
                    </div>
                  </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </Link>
            <Link to="/todo">
              <div className="hover-3d">
                <div className="card w-96 bg-accent shadow-2xl text-center rounded-4xl">
                  <div className="card-body">
                    <span className="badge badge-xs badge-warning">Active</span>
                    <div className="flex justify-between">
                      <h2 className="text-3xl font-bold">To-Do List</h2>
                      <span className="text-lg">Remaining Tasks: {tableData.length}</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                      <li>
                        <i className="fa-solid fa-check fa-2xl"></i>
                        <span>Turn your 'to-do' into 'done 🎯</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-check fa-2xl"></i>
                        <span>Master your time, master your life 📅</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-check fa-2xl"></i>
                        <span>Organize today, conquer tomorrow 🚀</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-check fa-2xl"></i>
                        <span>Stay on track 📈</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <button className="btn btn-primary btn-block">View List</button>
                    </div>
                  </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}