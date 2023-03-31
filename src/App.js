import logo from './logo.svg';
import './App.css';
import { AddForm } from "./AddForm";
import { UserList } from './UserList';
import { Employee } from './Employee';
import { Routes, Route, Link } from "react-router-dom";


function App() {

  return (

    <div>
      <Routes>
        <Route path="/" element={<Employee />} />
      </Routes>
    </div>

  );
}

export default App;
