export default function Pagination(props) {
  return (
    <div className="calendar-pagination">
      <button onClick={() => props.offsetHook(props.offset-1)}>{"<"}</button>
      Июнь
      <button onClick={() => props.offsetHook(props.offset+1)}>{">"}</button>
    </div>
  )
}
