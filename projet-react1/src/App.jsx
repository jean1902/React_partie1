import React, { useState } from 'react'
import './App.css'
import Compteur from './composant/compteur'
import Navbar from './composant/navbar'
import Post from './composant/post'


export default function App() {
  
  const [posts,setPosts]= useState([
    {id:1, titre:"jean julien",description:" homme très intélligent habile et élégant et enfin très riche",liker:"false"},
    {id:2, titre:"brice",description:" homme très barvard habile et élégant et de classe moyenne",liker:"true"},
    {id:3, titre:"kone Franck",description:" illétré",liker:"false"}
  ])

  const liker =(data)=>{
    //cloner les donnees
   const donnecopier=[...posts]; 
   //console.log(donnecopier,"voila")renvoieou copie tous les posts
  
   const index =posts.indexOf(data); //trouver l'index du post liké
   //console.log(index,'index dupost');
   donnecopier[index] ={...posts[index],//ramene les donnés de l'index du post liké
  
     liker:!posts[index].liker} //modifie le like tel sorte que sil est like affiche deja liké;
   setPosts(donnecopier);//undefined ?/
   
   console.log(donnecopier[index],'sdgfs')
    }

    const effacerPost =(id)=>{
      const nouvelledonnee = posts.filter(p =>p.id!=id);
      setPosts(nouvelledonnee);
 }
 const nombrelike=posts.filter((p) =>p.liker);
  
 
  return (

  

    <div>

      <Navbar nombrelike={nombrelike.length} />
      {
        posts.map((p)=> ( <Post data={p} key={p.id}  liker={liker}   supression={effacerPost} />))
      } 
     
    </div>


  )
}
        // const age =43;
 //----------------rendu conditionnelle sur composant ----------------- 
  //  <div> 
    
  //   <h1> bonjour très chèrs je viens pour vous saluer très halereusement</h1>
  //   <Compteur/>
  //   {
  //     age && <Compteur age={age} />
  //   }
  //   <Compteur/>
  //   <Compteur/> 
  //   <Compteur/>
  //  </div>

  