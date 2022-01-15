import "./SinglePost.css"

export default function SinglePost() {
    return (
        <>
            <div className='singlePost'>
                <div className='singlePostBox'>
                    <h1 className='singlePostTitle'>The Blog Writer</h1>
                    <img className='singlePostImg' src='https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' alt='' />

                    <div className='singlePostEdit'>
                        <i className=" singlePostIcon fas fa-edit"></i>
                        <i className=" singlePostIcon fas fa-trash"></i>
                    </div>

                    <div className='singlePostInfo'>
                        <span className='singlePostAuthor'> Author :- Manesh </span>
                        <span className='singlePostDate'> 1 Hour ago</span>
                    </div>
                    <p className="singlePostDesc"> Random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often
                        happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely
                        random paragraph from which to begin, it can take down some of the issues that may have been causing the writers'
                        block in the first place.
                        Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph
                        with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get
                        the writing started so that when the writer goes onto their day's writing projects, words are already flowing from
                        their fingers. Another writing challenge can be to take the individual sentences in the random paragraph and 21|
                        incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence
                        generator, the sentences from the random paragraph will have some connection to one another so it will be a bit
                        different. You also won't know exactly how many sentences will appear in the random paragraph.</p>
                </div>
            </div>
        </>
    )
}
