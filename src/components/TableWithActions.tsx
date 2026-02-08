import { Table,Button } from 'react-bootstrap';
export const TableWithActions = ({ items, onDelete, onUpdate }: any) => {
 return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Method</th>
            <th>Endpoint</th>
            <th>Response</th>
            <th>CreatedAt</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item:any) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.method}</td>
              <td>{item.endpoint}</td>
              <td>{item.response}</td>
              <td>{item.createdAt}</td>
              <td>
                <Button
                variant="danger"
                className="me-2"
                onClick={() => onDelete?.(item)}
              >
                Delete
              </Button>

              <Button
                variant="warning"
                onClick={() => onUpdate?.(item)}
              >
                Update
              </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
     
    </>
  );
}
