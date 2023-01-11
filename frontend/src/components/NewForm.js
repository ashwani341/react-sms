import { useRef } from "react";

export default function NewForm() {

  const nameRef = useRef();
  const courseRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target.parentNode);
    const data = {
      name: nameRef.current.value,
      course: courseRef.current.value
    };
    // sending the data to the backend
    const res = await fetch('http://localhost:5000/api/students', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const response = await res.json();
    console.log(response);
    nameRef.current.value = '';
    courseRef.current.value = '';
  }

  return (
    <>
      <h2 className='text-bg-info py-1 px-2'>Add Student</h2>
      <form method="post">
        <div className="mb-3">
          <input ref={nameRef} type="text" placeholder="Name" name="name" id="name" className="form-control" />
        </div>
        <div className="mb-3">
          <input ref={courseRef} type="text" placeholder="Course" name="course" id="course" className="form-control" />
        </div>
        <input type="submit" value="Add" className="btn btn-primary w-100" onClick={handleSubmit} />
      </form>
    </>
  );
}
