import React from 'react'

const Header = ({course}) => {

    return (
      <div>
        <h1>
          {course}
        </h1>
      </div>
    )
  }
  
  const Part = ({part}) => {
  
    return (
      <div>
        <p>
          {part.name} {part.exercises}
        </p>
      </div>
    )
  }
  
  const Content = ({parts}) => {
  
    return (
      <div>
          {parts.map(part =>
              <Part part = {part} />
          )}
      </div>
    )
  }
  
  const Total = ({parts}) => {
  
    const exercisesTotal = parts.reduce( (s, p) => {
      return s + p.exercises
    }, 0)
  
    return (
      <div>
        <b>
          Total of {exercisesTotal} exercises 
        </b>
      </div>
    )
  }
  
  const Course = ({course}) => {
    return (
      <>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </>
    )
  }

export default Course