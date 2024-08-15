import React,{useState} from "react";
import Toolbar from "./Toolbar";

function LandingPage(props){
  const [isLoggedIn,setIsLogggedIn] =useState(false);

  const onClickLogin=()=>{
    setIsLogggedIn(true);
  };

  const onClickLogout=()=>{
    setIsLogggedIn(false);
  };

  return(
    <div>
      <Toolbar 
      isLoggedIn={isLoggedIn}
      onClickLogin={onClickLogin}
      onClickLogout={onClickLogout}/>
      <div style={{padding:16}}>소플과 함께하는 리액트 공부!</div>
    </div>
  )
}

export default LandingPage;