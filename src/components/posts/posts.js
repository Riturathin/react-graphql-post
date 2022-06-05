import Comments from '../comments/comments';
import './posts.css';

const Posts = ({data}) => (
    <div className="posts">
        <h3>Posts</h3>
        { data.map((post, idx) => (
            <div className="post" key={idx}>
                <h5>{ post.title }</h5>
                <p><b>Comments </b></p>
                <Comments comments={post.comments.data} />
            </div>
        ))}
    </div>
)

export default Posts;