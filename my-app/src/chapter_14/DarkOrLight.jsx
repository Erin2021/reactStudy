import { useState,useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

//ThemeContext.Provider을 사용하여 consumer에게 모두 적용하는 역할.설정값을 여기서 관리
function DarkOrLight(props){
  const [theme,setTheme] = useState("light");

  //useCallback:메모이제이션,useMemo()의 함수반환버전.불필요한 렌더링 방지역할->여기서는 색상만 바꾸는것이니 그것만 렌더링 해야함.
  const toggleTheme=useCallback(()=>{
    if(theme == "light"){
      setTheme("dark");
    }else if (theme=="dark"){
      setTheme("light");
    }
  },[theme]);

  return(
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      <MainContent/>
    </ThemeContext.Provider>
  );
}

export default DarkOrLight;