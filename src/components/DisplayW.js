export default function DisplayW(props) {
  return(
    <div id="w-display">
      <p>Temperature: °{props.weth.temp}</p>
      <p>High: °{props.weth.temp_max}</p>
      <p>Low: °{props.weth.temp_min}</p>
      <p>Feels like: °{props.weth.feels_like}</p>
      <p>Humidity: {props.weth.humidity}%</p>
      <p>Pressure: {props.weth.pressure}Hg</p>
    </div>
  )
}
