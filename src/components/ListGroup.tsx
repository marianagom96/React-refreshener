function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

/*   if (items.length === 0) {
    return (
      <>
        <h1>List</h1>
        
        <p>No item found</p>
      </>
    );
  } */ 
 return (
    <>
      <h1>List</h1>
      {items.length=== 0 ?<p>No item found</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
