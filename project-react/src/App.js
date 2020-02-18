import React, {useState} from "react";
import Tweet from "./Tweet"




function App(){

const [isRed, setRed] = useState(false)
const [count, setCount] = useState(0);

const increment = () =>{
 setCount(count + 1);
}

return (
<div className="app">
<button onClick={increment}>Increment</button>
<h1>{count}</h1>

{/* <Tweet name="Oleg Kuts" message="Im am tired"/>
<Tweet name="Alex Costa" message="Try my new hair styler"/>
<Tweet name="Bill Gates" message="New toilets will be deployed next month"/> */}
</div>
)
}

export default App;
