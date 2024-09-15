import { useState } from 'react';
import Button from 'react-bootstrap/Button';


const Tabswitch=()=>{
   const [tab,setTab]=useState("login")

    return(
        <div style={{
           height:"100vh",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}>
          <div>
          <Button variant="primary" onClick={()=>{setTab('login')}}>login</Button>
          <Button variant="primary" onClick={()=>{setTab('signup')}}>signup</Button>
          <Button variant="primary" onClick={() => setTab('login2')}>Login2</Button>
          <Button variant="primary" onClick={() => setTab('signup2')}>Signup2</Button>
            </div>  
        <div style={{
            width:"500px",
            height:"500px",
            border:"2px solid black",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center"
        }} >
            {/* {
                tab==='login'?(
                    <form>
                        <h2>Login Form</h2>
                        <div>
                            <label>Email:</label>
                            <input type="email" placeholder="Enter email" />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" placeholder="Enter password" />
                        </div>
                        <Button variant="primary" type="submit">Login</Button>
                    </form>
                ):(
                    <form>
                    <h2>Signup Form</h2>
                    <div>
                        <label>Username:</label>
                        <input type="text" placeholder="Enter username" />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" placeholder="Enter email" />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" placeholder="Enter password" />
                    </div>
                    <Button variant="primary" type="submit">Signup</Button>
                </form>
                )
            } */}
             {tab === 'login' && (
                    <form>
                        <h2>Login Form</h2>
                        <div>
                            <label>Email:</label>
                            <input type="email" placeholder="Enter email" />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" placeholder="Enter password" />
                        </div>
                        <Button variant="primary" type="submit">Login</Button>
                    </form>
                )}

                {tab === 'signup' && (
                    <form>
                        <h2>Signup Form</h2>
                        <div>
                            <label>Username:</label>
                            <input type="text" placeholder="Enter username" />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="email" placeholder="Enter email" />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" placeholder="Enter password" />
                        </div>
                        <Button variant="primary" type="submit">Signup</Button>
                    </form>
                )}

                {tab === 'login2' && (
                    <form>
                        <h2>Login Form 2</h2>
                        <div>
                            <label>Email:</label>
                            <input type="email" placeholder="Enter email for login2" />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" placeholder="Enter password for login2" />
                        </div>
                        <Button variant="primary" type="submit">Login2</Button>
                    </form>
                )}

                {tab === 'signup2' && (
                    <form>
                        <h2>Signup Form 2</h2>
                        <div>
                            <label>Username:</label>
                            <input type="text" placeholder="Enter username for signup2" />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="email" placeholder="Enter email for signup2" />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" placeholder="Enter password for signup2" />
                        </div>
                        <Button variant="primary" type="submit">Signup2</Button>
                    </form>
                )}
       
        </div>
        </div>
    )
}
export default Tabswitch