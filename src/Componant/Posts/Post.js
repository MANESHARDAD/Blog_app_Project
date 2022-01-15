import "./Post.css"
import Blog from "../Blog/Blog"

export default function Post() {
    return (
        <>
            <div className="posts">
                <div className="blogHedding">Some Posts</div>
                <div className="post">
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                </div>
            </div>
        </>
    )
}
