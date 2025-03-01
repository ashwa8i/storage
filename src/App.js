import React, { useState } from "react";
import { signInWithGoogle, uploadFileToSupabase, logout } from "./firebase";
import './App.css'

function App() {
  const [file, setFile] = useState(null);

  return (
    <div>
      <h1>Firebase File Upload</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <br />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={() => uploadFileToSupabase(file)}>Upload File</button>
      <br />
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default App;