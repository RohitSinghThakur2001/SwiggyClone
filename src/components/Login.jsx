import React from "react";
import { useContext, useState } from "react";
import UserContext from "../utilities/UserContext";
function Login() {
  const { user, setUser } = useContext(UserContext);
  const [tempUser, setTempUser] = useState("");
  const [tempPassword, setTempPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      <h2 className="text-3xl font-bold">Login</h2>
      <div className="flex flex-col gap-1 p-2 w-1/2">
        <input
          type="text"
          placeholder="Email"
          className="p-2 border border-zinc-700"
          onChange={(e) => setTempUser(e.target.value)}
          value={tempUser}
        />
        <input
          type="text"
          placeholder="Password"
          className="p-2 border border-zinc-700"
          onChange={(e) => setTempPassword(e.target.value)}
          value={tempPassword}
        />
        {isLogin ? (
          <a href="/profile">Login</a>
        ) : (
          <button onClick={() => {
            if(user.username===tempUser && user.password===tempPassword){
              setIsLogin(true)
            }else{
              setTempPassword("")
              setTempUser("")
            }
          }}>Login</button>
        )}
      </div>
    </div>
  );
}

export default Login;
