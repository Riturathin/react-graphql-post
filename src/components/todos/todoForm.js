
import { useMutation } from "@apollo/client";
import {ADD_TODO } from '../../queries'
const TodoForm = () => {
    let input;
  const [addTodo, { data, loading, error }] = useMutation(ADD_TODO);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

    return (
        <div className="todo-adder left-aligned">
            <div className="add-todos">
                
                <div className="col-4 offset-md-4">
                    <form className="form-control" 
                    onSubmit={e => {
                        e.preventDefault();
                        addTodo({ variables: { title: input.value } });
                        input.value = '';
                      }}>
                        <h3>Todo form</h3>
                        <br />
                        <label htmlFor="addtodo"><small>Add a todo</small></label>
                        <textarea className="form-control" name='addtodo' id="addtodo" 
          ref={node => {
            input = node;
          }}
        />
                        <br />
                        <hr />
                        <br />
                        <label htmlFor="submitted_by"><small>Submitted by</small></label>
                        <input className="form-control" name='submitted_by' id="submitted_by"/>
                        <br />
                        <hr />
                        <br />
                        <label htmlFor="email"><small>Email</small></label>
                        <input className="form-control" name='email' id="email"/>
                        <br />
                        <hr />
                        <br />
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TodoForm