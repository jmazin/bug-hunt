import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const { data } = await axios.get("http://localhost:8080/registrations");
    setStudents(data);
  };

  const sortedStudents = [...students].toSorted((a, b) => {
    if (sortBy === "student") return a.student > b.student ? 1 : 2;
    if (sortBy === "course") return a.course > b.course ? 1 : 2;
    return 0;
  });

  return (
    <div className="course-list">
      <h2 className="course-list__title">Registrations</h2>
      <div className="course-list__buttons">
        <button className="course-list__button" onClick={() => setSortBy("student")}>
          Sort by Student
        </button>
        <button className="course-list__button" onClick={() => setSortBy("course")}>
          Sort by Course
        </button>
      </div>
      <ul className="course-list__items">
        {sortedStudents.map(({ id, course, student }) => (
          <li key={id} className="course-list__item">
            <span className="course-list__student">{student}</span>
            <span className="course-list__course">{course}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
