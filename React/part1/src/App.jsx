import React from "react";


const App = () => {
  const course = 'Half Stack Application Development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );

};
const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )

}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <p>parts: {part.name}-{part.exercises}exercises</p>
      ))}
    </div>
  );
};



const Total = (props) => {
  //got the help of co-pilot for sum function
  const sum = props.parts.reduce((total, part) => total +
    part.exercises, 0)
  return (
    <div>
      <p>Total Number of exercises: {sum}</p>
    </div>
  );
};

export default App;