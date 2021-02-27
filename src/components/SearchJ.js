export default function SearchJ(props) {
  return (
    <div>
      <form onSubmit={props.submit} id="j-form">
        <input id="j-search" type="submit" value="Search"/>
      </form>
    </div>
  )
}