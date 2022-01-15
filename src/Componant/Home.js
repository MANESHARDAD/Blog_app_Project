import "./Home.css"
import Header from "../Header/Header"
import Post from "./Posts/Post"
import SinglePost from "./SinglePost/SinglePost"

export default function Home() {
    return (
        <>
            <div className="home">
                <Header />
                <Post />
                <SinglePost />
                
                
            </div>
        </>
    )
}
