export default function SearchW(props) {
  return (
    <div>
      <form onSubmit={props.submit} id="w-form">
        <input
        id="w-input"
        placeholder="City" 
        type="text"
        value={props.value}
        onChange={props.change}
        />
        <input id="w-search" type="submit" value="Search"/>
      </form>
    </div>
  )
}
