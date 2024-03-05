import { useState,useEffect } from "react";
//export components
import Header from "./components/header";
import StudentList from "./components/StudentList";
import AddForm from "./components/addForm";
import "./App.css";

function App() {
  //พื้นที่แสดงผล
  //สร้างStateแบบปกติ
  const [student, setStudent] = useState( JSON.parse(localStorage.getItem("student")) || [
    {id: "1", name: "Sunsern" ,gender: "male"},
  ]);
  const [editId, setEditId] = useState(null);
  const [theme,setTheme] = useState("light");

  useEffect(()=>{
   localStorage.setItem("student",JSON.stringify(student)) //เมื่อมีeffectกับstudent
  },[student])

  function deleteStudent(id) {
    const find_delete = student.filter((item) => item.id !== id);
    setStudent(find_delete);
  }

  function editStudent(id) {
    setEditId(id);
  }

  return (
    <div className={"App"+ theme}>
      <Header title="menu" theme={theme} setTheme={setTheme} />
      <main>
        <AddForm student={student} setStudent={setStudent} editId={editId} setEditId={setEditId} />
        <StudentList
          student={student}
          deleteStudent={deleteStudent}
          editStudent={editStudent}
        />
      </main>
    </div>
  );
}

export default App;
