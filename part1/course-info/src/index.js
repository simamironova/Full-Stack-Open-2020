import React from 'react'
import ReactDOM from 'react-dom'



const Header = (props) => {
  console.log(props)
  return (
        
    <h1> {props.course}</h1> 
       
       )
      }
const Part = (props) => {
  console.log(props)
  return (
  <div>      
    <p> {props.part} {props.exercise}</p> 
       </div>
       )
      }

const Content = (props)  =>{
  console.log(props)
  return (
  <>
    <Part part={props.part1} exercise={props.exercise1} />
    <Part part={props.part2} exercise={props.exercise2} />
    <Part part={props.part3} exercise={props.exercise3}/>
    </>
        )
      }
const Total = (props) => {
  return (
  <div>      
    <p> {props.total}</p> 
      </div>
        )
        }

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course.name} />
      <Content part1={course.parts[0].name} exercise1={course.parts[0].exercises} part2={course.parts[1].name} exercise2={course.parts[1].exercises} part3={course.parts[2].name} exercise3={course.parts[2].exercises} />
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
