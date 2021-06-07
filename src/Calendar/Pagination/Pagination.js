export default function Pagination(props) {
  return (
    <div className="calendar-pagination">
      <button onClick={() => props.pageDate(-1)}>{"<"}</button>
      <div>{props.name}</div>
      <button onClick={() => props.pageDate(1)}>{">"}</button>
    </div>
  )
}
