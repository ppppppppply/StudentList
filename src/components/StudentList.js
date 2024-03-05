import { useState } from "react";
import "./studentList.css";
import Item from "./item";
export default function StudentList(props) {
  const { student, deleteStudent, editStudent } = props;
  //สร้างState
  //Array
  const [show, setShow] = useState(true); //true แสดงข้อมูล , false ซ่อนข้อมูล
  //เรียกใช้State

  const btnStyle = {
    background: show ? "red" : "green",
  };

  return (
    <>
      <ul>
        <div className="header">
          <h1>จำนวนนักเรียน : {student.length}</h1>
          <button onClick={() => setShow(!show)} style={btnStyle}>
            {show ? "ซ่อน" : "แสดง"}
          </button>
        </div>
        {show &&
          student.map((data) => (
            <Item key={data.id} data={data} deleteStudent={deleteStudent} editStudent={editStudent} />
          ))}
      </ul>
    </>
  );
}
