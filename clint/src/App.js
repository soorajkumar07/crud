// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import axios from "axios";
// import { Axios } from 'axios';

function App() {
  const [Facname, setName] = useState("");
  const [Age, setAge] = useState(1);
  const [Location, setLocation] = useState("");
  const [Countary, setCountary] = useState("");
  const [Salary, setSalary] = useState(0);
  let [emplist, setEmp] = useState([]);
  let [newSalary, setnewSalary] = useState(0);
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
        Salary: Salary,
      })
      .then(() => {
        // console.log("sucess");
        setEmp([...emplist,{
           name: Facname,
        age: Age,
        location: Location,
        countary: Countary,
        salary: Salary,
        }])
        // console.log(err);
      });

    // .catch((res) => {
    //   console.log(res);
    // });
  };

  const getemp = () => {
    axios.get("http://localhost:3001/emp").then((Response) => {
      // console.log(Response)
      setEmp(Response.data);
    });
  };
  const update = (facid) => {
    axios
      .put("http://localhost:3001/update", {
        Salary: newSalary,
        facid: facid,
      })
      .then((Response) => {
        alert("updated");
        console.log(Response);
      })
      // .catch(err=>console.log(err));
      // console.log(newSalary);
  };

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

        {emplist.map((val) => {
          // return <div>{val.facName}</div>
          return (
            <div className="details" key={val.facid}>
              <div>
                <h4 key={val.facid}>Name: {val.facName}</h4>

                <h4 key={val.Age}>Age: {val.Age}</h4>

                <h4 key={val.Location}>Location: {val.Location}</h4>

                <h4 key={val.Countary}>Countary: {val.Countary}</h4>

                <h4 key={val.Salary}>Salary: {val.Salary}</h4>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="500"
                  onChange={(event) => {
                    setnewSalary(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    update(val.facid);
                  }}
                >
                  UPDATE
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;
