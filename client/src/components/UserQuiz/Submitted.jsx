import React from 'react'
import { useNavigate } from 'react-router-dom'

const Submitted = () => {
  const navigate = useNavigate();
    return (
    <div>Submitted
        <button onClick={()=>navigate('/user')}>Go Back</button>
    </div>
  )
}

export default Submitted