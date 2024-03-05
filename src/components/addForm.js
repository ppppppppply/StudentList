import { useState } from "react";
import "./addForm.css";
export default function AddForm(props) {
  const { student, setStudent, editId, setEditId } = props;
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [gender, setGander] = useState("male");
  function saveStudent(e) {
    e.preventDefault();
    if (!name || !id) {
      alert("โปรดป้อนข้อมูลให้ครบ");
    } else if (editId != null) {
      //หารายการที่ไอดีตรง
      const update_Student = student.map((item) => {
        if (item.id === editId) {
          return {...item, name:name, gender:gender, id:id}
        }
        return item;
      });
      setStudent(update_Student)
      setEditId(null)
    } else {
      const newStudent = {
        id: id,
        name: name,
        gender: gender,
      };
      setStudent([...student, newStudent]);
      setName("");
      setId("");
      console.log(student);
    }
  }

  return (
    <section className="container">
      <form onSubmit={saveStudent}>
        <label>ชื่อนักเรียน</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label>รหัสประจำตัว</label>
        <input
          type="text"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        ></input>
        <select value={gender} onChange={(e) => setGander(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button type="submit" className="btn-add">
          {editId ? "อัพเดท" : "บันทึก"}
        </button>
      </form>
    </section>
  );
}
