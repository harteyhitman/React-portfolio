import React from 'react'
import {ToolsData} from './ToolsData'


const Tools = (props) => {
  return (
    <div className='dev-tools'>
    
    {ToolsData.map((tools) => (
       <div className='tools-container' key={tools.id}>
       <img className='tools-img' src={tools.imageKey} alt="" />
        <p>{tools.text}</p>
       </div>
    ))}
    </div>
  )
}

export default Tools