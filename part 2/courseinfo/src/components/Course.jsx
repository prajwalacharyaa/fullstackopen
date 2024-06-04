const CourseName = ({ courses }) => {
    return (
        <div>
            {courses.map((course) =>
                <div key={course.id}> <h2 >{course.name}</h2>
                    <CourseParts parts={course.parts} />
                    <Total parts={course.parts} />
                </div>
            )}
        </div>
    )
}

const CourseParts = ({ parts }) => {
    //   console.log('Parts:', parts);
    return (
        <div>
            {parts.map((part) => (
                <p key={part.id}>{part.name}
                    {part.exercises}
                </p>
            ))}
            {/* <Total exercises={parts.exercises} /> */}
        </div>
    )
}


const Total = ({ parts }) => {
    const sum = parts.reduce((total, part) =>
        total + part.exercises, 0)
    return (
        <div>
            <h3>Total of {sum} exercises</h3>
        </div>
    );
};

export default CourseName