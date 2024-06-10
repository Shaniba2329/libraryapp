import React, { useState } from 'react'
import Navbar from './Navbar'

const Viewall = () => {
    const [data,changeData]=useState(
        [
        {"title":"wing of fire","category":"novel","author":"apj","price":450},
        {"title":"goat life","category":"novel","author":"benjamin","price":860}
        ] 
    )
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">title</th>
      <th scope="col">category</th>
      <th scope="col">author</th>
      <th scope="col">price</th>
    </tr>
  </thead>
  <tbody>
    {data.map(
        (value,index)=>{
            return <tr>
            <th scope="row">{value.title}</th>
            <td>{value.category}</td>
            <td>{value.author}</td>
            <td>{value.price}</td>
          </tr>
         
        }
    )}
  </tbody>
</table> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Viewall