// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [Facname, setName] = useState("");
  const [Age, setAge] = useState(1);
  const [Location, setLocation] = useState("");
  const [Countary, setCountary] = useState("");
  const [Salary, setSalary] = useState(0);
  let [emplist,setEmp]=useState([])
  // const Dispinfo =()=>{
  //   console.log(Facname+Age+Location+Country+
  //     Salary)

  // }

  const addFac = () => {
    axios
      .post("http://localhost:3001/create", {
        name: Facname,
        age: Age,
        location: Location,
        countary: Countary,
        salary: Salary,
      })
      .then((err) => {
        console.log(err);
      })
      .catch((res) => {
        console.log(res);
      });
  };

   const getemp=()=>{
    axios.get("http://localhost:3001/emp").then((Response=>{
      console.log(Response)
    }))
      
    }
  


  return (
    <div className="App">
      <div className="info">
        <label>FacName:</label>
        <input
          type={"text"}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type={"number"}
          // value="10"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Location:</label>
        <input
          type={"text"}
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        />
        <label>Country:</label>
        <input
          type={"text"}
          // value="india"
          onChange={(event) => {
            setCountary(event.target.value);
          }}
        />
        <label>Salary:</label>
        <input
          type={"number"}
          onChange={(event) => {
            setSalary(event.target.value);
          }}
        />

        <button onClick={addFac}>Add Fac</button>
      </div>
      <div className="emp">
        <button onClick={getemp}> table of emp</button>
      </div>
    </div>
  );
 }       
export default App;
