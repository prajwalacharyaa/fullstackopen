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


const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]

    return (
        <div>
            <h1>Web development curriculum</h1>
            <CourseName courses={courses} />
        </div>
    )
}

export default App