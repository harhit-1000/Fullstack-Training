import React from 'react'
import MyForm from './MyForm';
function clicknplay(){
  console.log("click and play");
}

function App() {
  return (
    <div>
      {/* <button className="btn" onClick={clicknplay}>click me</button> */}
      <MyForm/>
    </div>
  )
}

export default App
