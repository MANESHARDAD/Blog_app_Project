import "./Header.css"



export default function Header() {
    return (
       <>
           <div className="header">
               <img className="hederImg" src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" ></img>
               <div className="header_title">
                   <span className="headerTitleLarge">Blog</span>
                   <span className="headerTitleSmall1">“It’s not about ideas.</span>
                   <span className="headerTitleSmall"> It’s about making ideas happen.”.</span>
               </div>
           </div>
       </>
    )
}
