function ListGroup() {

    const items = ["new York", "san francisco", "tokyo", "london", "paris"];
    
    items.map(item => <li>{item}</li>)
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second Item</li>
        <li className="list-group-item">A third Item</li>
        <li className="list-group-item">A fourth Item</li>
        <li className="list-group-item">and a fifth one</li>
      </ul>
    </>
  );
}

export default ListGroup;
