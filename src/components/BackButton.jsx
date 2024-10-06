import React,{memo} from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = (props) => {
    const navigate  = useNavigate();
  return (
    <button className={` input ${props?.className}`} onClick={()=>navigate (-1)}>Go Back</button>
  )
}

export default memo(BackButton);