import './comments.css';

const Comments = ({comments}) => (
    <div className="comments">
        <div className="col-8 offset-md-1">
            <>
            { comments.map((comment,idx) => <div className="comment">
                <p>{ comment.name }</p>
                    <small>Posted by: {comment.email }</small>
                </div>
                )
            }
            </>
        </div>
    </div>
)

export default Comments;

// {comments.map((comment,idx) => 
//     (
//     <div className="comment">
//         <p>{ comment.title }</p>
//         <small>Posted by: {comment.email }</small>
//     <div>
//     )
// )}