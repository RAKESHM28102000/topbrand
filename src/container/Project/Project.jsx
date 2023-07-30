import React from 'react';
import './Project.scss';

const Project = () => (
  <div id='project' className="project">
     <div className='flexall'> 
        <div className='flex1'>
          
        </div>

        <div className="flex2">
           <div className='gridinner'>
            <h2 className="h-text">100+</h2>
            <p className="p-text">Clients</p>
           </div>
           <div className='gridinner'>
            <h2 className="h-text">10+</h2>
            <p className="p-text">Experience</p>
           </div>
           <div className='gridinner'>
            <h2 className="h-text">150+</h2>
            <p className="p-text">Projects</p>
           </div>
   
           <div className='gridinner'>
            <h2 className="h-text">50</h2>
            <p className="p-text">Employees</p>
           </div>
   
     
        </div>
        </div>
      </div>    

);

export default Project;