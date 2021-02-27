export default function SearchG(props) {
  return (
    <div>
      <form onSubmit={props.submit} id="gform">
        <input
          id="g-input"
          placeholder="Gif" 
          type="text"
          value={props.value}
          onChange={props.change}
        />
        <input
          id="g-input"
          class="limit"
          placeholder="Limit" 
          type="text"
          value={props.valueLim}
          onChange={props.limit}
        />
        <input id="g-search" class="search" type="submit" value="Search"/>
      </form>
    </div>
  )
}