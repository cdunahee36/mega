export default function DisplayG(props) {
  const gifList = props.gif.length 
    ? props.gif.map(g => (
      <img id="g-img" className="gif" src={g.images.original.url} />
    ))
    : <p></p>

    return(
      <div id="g-list">{gifList}</div>
    )
}
