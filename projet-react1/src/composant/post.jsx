import React from 'react'

export default function post({ data,liker,supression}) {
  return (
    <div className={data.liker ? "post active ":"post"}>
       
       <div className="bloc-text">
       <h1>voici un post</h1>
       <h2>{data.titre} </h2>
       <p>{data.description}</p>
       </div>
       <div className="bloc-btn">
        <button className='btn btn-like' onClick={()=>liker(data)} > { data.liker ? "deja like" :"liker"}</button> 
        {/* ramener l'objet sur lequ'el on a cliqué  */}
        <button  onClick={()=>supression(data.id)}  className='btn btn-Effacer'>Effacer</button>
       </div>

    
    </div>
  )
}
