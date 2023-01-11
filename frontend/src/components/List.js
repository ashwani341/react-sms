import { useEffect, useState } from 'react';

export default function List() {

  const [students, setStudents] = useState([]);

  async function getStudents() {
    const res = await fetch('http://localhost:5000/api/students');
    const data = await res.json();
    console.log(data);
    setStudents(data);
  }
  useEffect(() => {
    getStudents();
  }, []);


  async function handleDelete(id) {
    const res = await fetch(`http://localhost:5000/api/students/${id}`, {
      method: 'delete'
    });
    const response = await res.json();
    console.log(response);
  }


  return (
    <>
      <h2 className='text-bg-info py-1 px-2'>Students List</h2>
      <table className='table table-bordered table-hover table-success'>
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Name</th>
            <th>Course</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {
            students.status === 'success' &&
            students.data.map((student, index) => (
              <tr key={student._id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>
                  <button className='btn btn-primary'>
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button className='btn btn-danger ms-2' onClick={() => handleDelete(student._id)}>
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
}
