import { useState } from 'react';
import './App.css';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";

function App() {
  const [likeCount, setlikeCount] = useState (0); 
  const [commentCount, setComentCount] = useState (0);
  const [isLiked, setIsliked]= useState(false);
  const [isSaved, setIsSaved]= useState(false);

function handlelike() {
  if (isLiked) {
    setlikeCount(likeCount - 1);
  } else {
    setlikeCount(likeCount + 1);
  }
  setIsliked(!isLiked);
}

function handlecoment(){
  setComentCount(commentCount + 1);
}

function handlesave(){
  setIsSaved((isSaved)=> !isSaved);
}

  return (
    <>
    <div className ="post-container">
      <img src="https://www.tweeteraser.com/br/resources/wp-content/uploads/2023/10/memes-8280093_640.jpg" alt = "Conteúdo "className = "post-image"/>
      <p> This is a text to my post in Social Media #REACT #JSX #PROGRAMMING #FRONT-END</p>
      <div className="post-bottom">
       <div className="main-actions">
        <button onClick={handlelike} className='icon-btn'>
        {isLiked ? <FaHeart color="red" /> : <FaRegHeart/> }</button>
         <p>{likeCount}</p>
         <button onClick={handlecoment} className='icon-btn'><FaRegComment /></button>
         <p>{commentCount}</p>
         <button className='icon-btn' ><BsSend /></button>
       </div>
         <button onClick={handlesave} className="icon-btn">
          {isSaved ? <FaBookmark color="red" /> : <FaRegBookmark />}
         </button>
       </div>
    </div>  
     </>  
  );
}

export default App
