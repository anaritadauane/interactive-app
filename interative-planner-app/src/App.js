import Header from "./components/Header";
import Planner from "./components/Planner";

function App() {
    const tasks = [
      {
        id: 1,
        text: 'Go to the salon',
        date: '2022/12/15',
        time: '12:00', 
        reminder: false,
        priority: false 
      },

      {
        id: 2,
        text: 'Go to the mall',
        date: '2022/12/05',
        time: '14:00', 
        reminder: true,
        priority: false 
      }, 

      {
        id: 3,
        text: 'Medical Appoitment',
        date: '2022/12/06',
        time: '16:00', 
        reminder: true,
        priority: true 
      }
    ]


  return (
    <div>
      <Header />
      <Planner tasks = {tasks} />
    </div>
   
  );
}

export default App;
