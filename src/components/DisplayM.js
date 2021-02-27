export default function DisplayM(props) {
  return(
    <div id="m-display">
      <p>Title: {props.mov.Title}</p>
      <p>Actors: {props.mov.Actors}</p>
      <p>Genre: {props.mov.Genre}</p>
      <p>Rating: {props.mov.Rated}</p>
      <p>Year: {props.mov.Year}</p>
      <p>Runtime: {props.mov.Runtime}</p>
      <img src={props.mov.Poster}></img>
    </div>
  )
}