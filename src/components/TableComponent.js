function TableComponent({ data }) {
  return (
    <center>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </center>
  );
}

export default TableComponent;