
import "./App.css";
import Main from "./components/Main";
import User from "./components/User";
import AddNewTodo from "./components/AddNewTodo";
import Calender from "./components/Calendar";
import Projects from "./components/Projects";
import Todos from "./components/Todos";
import EditTodo from "./components/EditTodo";
import Sidebar from "./components/Sidebar";
//first
function App() {
  return (
    <div className="App">
      <Sidebar>
        <User />
        <AddNewTodo />
        <Calender />
        <Projects />
      </Sidebar>
      <Main>
        <Todos />
        <EditTodo />
      </Main>
      
    </div>
  );
}

export default App;
