import "./Write.css"

export default function Write() {
    return (
       <><div className="write_Contener">
           <div className="write_box">
           <h1 className="heading">Write your Artical</h1>
           <img className="write_Image" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg" alt="" />
           <div className="write">
               <form className="writeForm">
                  <div className="formContent1">
                          <label htmlFor="fileInput" >
                         <i  className="writeIcon fas fa-plus-circle"></i>
                          </label>
                          <input  type="file"  id="fileInput" style={{display : "none"}} />
                          <input type= "text" placeholder="Title" className="writeInput" autoFocus = {true}  /> 
                  </div>
                  <div className="formContent2">
                      <textarea placeholder="Tell your story..." type='text' className="discri_Text"></textarea>
                  </div>
                  <button className="Write_Submit">Publish</button>
               </form>
           </div>
           </div>
           </div>
       </>
    )
}
