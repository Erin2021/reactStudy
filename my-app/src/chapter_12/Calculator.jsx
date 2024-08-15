import React,{useState} from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerditc(props){
  if(props.celsius >=100){
    return <p>물이 끓습니다.</p>
  }
  return <p>물이 끓지 않습니다.</p>
}

function toCelsius(fahrenheit){
  return ((fahrenheit-32)*5)/9;
}

function toFahrenheit(celsius){
  return (celsius*9)/5+32;
}

function tryConvert(temperature,convert){
  const input = parseFloat(temperature);
  if(Number.isNaN(input)){
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000)/1000;
  return rounded.toString();
}

function Calculator(props){
  const [temperature,setTemperature] =useState("");
  const [scale,setScale]=useState("c");

  const handleCelsiusChange =(temperature)=>{
    setTemperature(temperature);
    setScale("c");
  }

  const handleFahrenheitChange =(temperature)=>{
    setTemperature(temperature);
    setScale("f");
  }

  //부모state 끌어올려서 부모값을 계산하여 하위 컴포넌트에게 넘기는 과정
  const celsius = scale === "f"? tryConvert(temperature,toCelsius):temperature;//scale이 f라면 celsius에 변환된 섭씨값을 넣어라.그렇지 않다면 그냥 temperature값을 넣어라
  const fahrenheit = scale ==="c"? tryConvert(temperature,toFahrenheit):temperature;

  return(
    <div>
      <TemperatureInput 
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput 
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerditc celsius={parseFloat(celsius)}/>
    </div>
  )
}

export default Calculator