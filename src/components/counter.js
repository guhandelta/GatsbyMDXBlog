import React, { useState } from 'react'

 const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="counter">
            <h3>likes {count}</h3>
            <button 
                onClick={() => setCount(count+1)}
            >
                Like
            </button>
        </div>
    )
}
export default Counter