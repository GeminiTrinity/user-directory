import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import Table from 'react-bootstrap/Table'

function Form() {
  const { data } = useContext(UserContext);

  return (
    <>
      {data.users.map((item, index) => (
        <div key={(item.name.first, item.name.last, item.cell, item.email)}>
          <Table striped bordered hover>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Cell Phone</th>
                    <th>Email Address</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{item.name.first}</td>
                    <td>{item.name.last}</td>
                    <td>{item.cell}</td>
                    <td>{item.email}</td>
                </tr>
            </tbody>
        </Table>
        </div>
      ))}
    </>
  );
}

export default Form;
