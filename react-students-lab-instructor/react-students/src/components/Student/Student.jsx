import React from 'react'
import './Student.css'

function Student(props) {

    console.log('This is the students props! ', props)

  return (
    <div>
     <h3> {props.name}</h3>
      <p>{props.bio}</p>
      {props.scores.map((s, i) =>
      <div key={i}>
        <div>{s.date}</div>
        <div>{s.score}</div>
      </div> 
        )}
    </div>
  )
}

export default Student