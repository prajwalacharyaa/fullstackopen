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

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  )
}


const Total = (props) => {
  let sum = 0
  const total = props.parts && props.parts.length > 0 ? props.parts.map((ex) => {
    return sum += ex.exercise
  }) : 0

  return (
    <div>
      <p>Total Number of exercises: {sum}</p>
    </div>
  );
};

export default App;