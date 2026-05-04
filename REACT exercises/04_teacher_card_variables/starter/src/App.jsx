
function CourseInfo() {
  const courseName = "React 入門";
  const lessonCount = 5;

  return (
    <div className="card">
      <h2>{courseName}</h2>
      <p>本單元共有 {lessonCount} 週</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="container">
      <h1>請建立 TeacherCard</h1>
      <CourseInfo />
    </div>
  );
}
