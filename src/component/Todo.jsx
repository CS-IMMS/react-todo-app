import React from 'react' 
import Timer from './Timer'
import {FaTrash} from 'react-icons/fa'
import {FaPencilAlt} from 'react-icons/fa'

function Todo({project, title, handleDelete, handleEdit}) {
 
    return (
        <div>
            <div className='card mt-5' style={{width: "18rem"}}>
                <div className="card-body bg-dark text-center col-12 text-white">
                        <h5 className="card-title">{title}</h5>
                        <p>{project}</p>
                        <div className='d-flex justify-content-end'>
                        <div className='mx-3' style={{  cursor: 'pointer'}}> 
                        <FaTrash onClick={handleDelete}/> 
                        </div>
                        <div className='mx-2' style={{  cursor: 'pointer'}}>
                             <FaPencilAlt  onClick={handleEdit} /> 
                             </div>
                        
                        </div>
                        <Timer/>
                </div>
            
            </div>
             
        </div>
    )
}

export default Todo
