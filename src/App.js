// import GanttTimeLine from "./GanttTimeline";
import {Gantt} from "./RawChart/gantt/gantt";



function App() {
    const currentDate = new Date();
    let tasks = [
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2, 12, 28),
            name: "Idea",
            id: "Task 0",
            progress: 45,
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
            name: "Research",
            id: "Task 1",
            progress: 25,
            dependencies: ["Task 0"],
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
            name: "Discussion with team",
            id: "Task 2",
            progress: 10,
            dependencies: ["Task 1"],
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
            name: "Developing",
            id: "Task 3",
            progress: 2,
            dependencies: ["Task 2"],
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
            name: "Review",
            id: "Task 4",
            progress: 70,
            dependencies: ["Task 2"],
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 16),
            name: "Release & Eat Pizza",
            id: "Task 6",
            progress: currentDate.getMonth(),
            dependencies: ["Task 4"],
            styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 24),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 25),
            name: "Closing",
            id: "Task 9",
            progress: 0,
            isDisabled: true,
        },
    ];

  return (
    <div>
        <Gantt tasks={tasks}/>
    </div>
  );
}

export default App;
