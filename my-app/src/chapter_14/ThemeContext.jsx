import React from "react";

const ThemeContext = React.createContext();
ThemeContext.displayName="ThemeContext";//개발자도구로 확인하려고 이름 붙임

export default ThemeContext;

//context사용하려고 만들었다. provider값은 다른 곳에서 만지겠다.