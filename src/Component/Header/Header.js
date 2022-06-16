import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { uitoggleaction } from '../../Store/UiSlice';
import {additem} from '../../Store/CartSlice'

function Header() {

    const [name,setname]=useState()
    const [age,setage]=useState()


const dispatch=useDispatch();

    const toggleaction=()=>{
 dispatch(uitoggleaction.change())
    }

    const toggle =useSelector((state)=> state.ui.toggle)
    const data = useSelector((state)=>state.additems.name)
    console.log(data)

    const onsubmit=()=>{
         dispatch(additem.additems({
            name,
            age
         }))
    }
   
  return (
    <>
    <div>
        <button className='btn btn-primary my-5' onClick={toggleaction}>Toggle</button>
    </div>
    <div>
        <input type="text"  onChange={(e)=>setname(e.target.value)} />
        <input type="text" onChange={(e)=>setage(e.target.value)} />
        <button className='btn btninfo' onClick={onsubmit}>Add Data</button>

    </div>
    </>
  )
}

export default Header;