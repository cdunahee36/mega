export default function SearchM(props) {
  return (
    <div>
      <form onSubmit={props.submit} id="mov-form">
      <input
        id="mov-input"
        placeholder="Movie" 
        type="text"
        value={props.value}
        onChange={props.change}
        />
        <input id="m-search" type="submit" value="Search"/>
      </form>
    </div>
  )
}