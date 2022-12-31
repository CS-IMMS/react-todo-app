import React,{useState} from 'react'
import Todo from './Todo'
import {v4 as uuidv4} from "uuid"; 

function TodosList() {

    const [todos,setTodos] = useState([
       /*  {
            id:1,
            title:'titre 1',
            project: 'Project 1'
        } */
    ])
    const [title, setTitle] = useState('')
    const [project, setProject] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        todos.push(
            {
                id: uuidv4(),
                title:title,
                project: project
            }
        )
        setTitle('')
        setProject('')
    }

   const  handleDelete = (e, id) =>{
      const newTodos = todos.filter(todo => todo.id !== id)
      setTodos(newTodos)
   }
   const handleEdit = (e, id, title, project)=>{
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
    setTitle(title)
    setProject(project)
    
   }

    return (
       <div  className='container '>
        <div className='card mt-5' style={{width: "18rem"}}>
            <div className="card-body">
                <form className='mt-4 ' onSubmit={handleSubmit}>
                    <div className='card card-body text-white text-start  bg-dark'>
                        <div className='form-group'>
                             <label>Title</label>
                            <input className='form-control' required value={title} onChange={(e)=>{setTitle(e.target.value)}}  type="text" />
                            <label>Projet</label>
                            <input className='form-control' required  type="text" value={project} onChange={(e)=>{setProject(e.target.value)}}/>
                            <button className='btn btn-primary mt-4' type="submit" >Create</button>
                             <button className='btn btn-danger mt-4 mx-4' >Cancel</button>
                         </div>
                    </div>
                </form>
            </div>
            
        </div>
       {
        todos.map(todo =>{
            return(
                <Todo
                key={todo.id}
                title={todo.title}
                project = {todo.project}
                handleDelete = {e => handleDelete(e, todo.id)}
                 handleEdit = {e => handleEdit(e, todo.id, todo.title, todo.project)} 
                />
            )
        })
       }
       
       </div>
    )
}

export default TodosList
