import "./item.css";
export default function Item(props) {
  //สร้างstate เก็บค่าprops
  const { data, deleteStudent, editStudent } = props; //ทำให้ตัวแปรdataมีค่า=data,deletestudent
  return (
    <>
      <li key={data.id} className={data.gender}>
        <p>
          {data.id} - {data.name}
        </p>
        <div className="btn_list">
          <svg
            fill="#EADFB4"
            stroke-width="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => deleteStudent(data.id)} className="delete"
          >
            <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"></path>
            <path
              fill-rule="evenodd"
              d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <button onClick={() => editStudent(data.id)} className="edit">
            แก้ไข
          </button>
        </div>
      </li>
    </>
  );
}
