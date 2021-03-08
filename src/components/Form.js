import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import Table from 'react-bootstrap/Table'

function Form() {
  const { data } = useContext(UserContext);

  return (
    <>
    <Table bordered hover data-filter-control="true">
        <thead>
          <tr>
            <th data-field="name">First Name</th>
            <th>Last Name</th>
            <th>Cell Phone</th>
            <th>Email Address</th>
          </tr>
        </thead>
      {data.users.map((item, index) => (
        <tbody>
          <tr>
            <td>{item.name.first}</td>
            <td>{item.name.last}</td>
            <td>{item.cell}</td>
            <td>{item.email}</td>
          </tr>
        </tbody>
      ))}
      </Table>
    </>
  );
}

export default Form;
