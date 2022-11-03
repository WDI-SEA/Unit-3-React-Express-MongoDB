import React from 'react'
import './SubMenuItem.css'

function SubMenuItem(props) {
  return (
    <li><a href={props.link}>{props.title}</a></li>
  )
}

export default SubMenuItem
