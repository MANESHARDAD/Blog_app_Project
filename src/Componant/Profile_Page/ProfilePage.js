import "./ProfilePage.css"

export default function ProfilePage() {
    return (
        <>
        <div className="setting_page">
        <div className="setting_Contener" >
            <div className="setting">
                <div className="settingWraper">
                    <div className="SettingTitle">
                        <span className="updateProfile">Updade Your Account</span>
                        <span className="deleteProfile">Delete Your Account</span>
                    </div>
                    <form className="formSetting">
                        <label >Profile picture</label>
                        <div className="settingPP" >
                            <img src="/image/manesh.jpeg" alt="" />
                            <label htmlFor="fileInput">
                                <i className="ProfilePIcon far fa-user"></i>
                            </label>
                            <input type="file" id="fileInput" style={{ display: "none" }} />
                        </div>
                        <label>Username</label>
                        <input type="text" placeholder="username" />
                        <label>Email</label>
                        <input type="email" placeholder="user@gmail.com" />
                        <label>Password</label>
                        <input type="password"  />
                        <button className="Profile_submit" >Update</button>
                        
                    </form>

                </div>
            </div>
            </div>
            </div>
        </>
    )
}
