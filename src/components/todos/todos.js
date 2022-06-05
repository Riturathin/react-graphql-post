

import { useQuery } from "@apollo/client";
import { useRef, useState } from "react";
import { GET_TODOS } from "../../queries";
import TodoForm from './todoForm';

import './todos.css';

const Todos = () => {
    const [todoComplete, setTodoComplete] = useState(false);
    const [ addTodo, setAddTodo ] = useState( false);
    const todoTitle = useRef(null)
    const { data, loading, errror } = useQuery(GET_TODOS);
    if( loading ) return 'Loading...';
    if( errror ) return 'Error fetching data'

    // const [todoComplete, setTodoComplete] = useState(false);

    const handleChange = (e) => {
        setTodoComplete(!e.target.checked) 
    }
    
    return (
        <div className="col-12">
            <h1 className="text-left">Todos</h1>
            <div className="col-12 right-aligned">
                <button className="btn btn-primary" onClick={() => setAddTodo(!addTodo)}>
                    ADD TODO
                </button>
            </div>
            <table>
            <thead>
                <tr>
                    <td>Sl No.</td>
                    <td>Completed</td>
                    <td>Todo</td>
                    <td>Submitted by</td>
                    <td>Email</td>
                </tr>
            </thead>
            <tbody >
            { data.todos.data.map((todo, idx) => 
                
                <tr key={idx}>
                    <td>{idx}</td>
                    <td> <input type='checkbox' 
                        id={todo.title}  
                        defaultChecked={todo.completed} 
                        onClick={ handleChange}/>
                    </td>
                    <td className='todo-title' ref={todoTitle}>{ todo.title }</td>
                    <td>{ todo.user.name}</td>
                    <td>{todo.user.email }</td>
                </tr>
               
            )} 
             </tbody>
            </table>

            { addTodo && <TodoForm /> }
        </div>
    )
}

export default Todos;
