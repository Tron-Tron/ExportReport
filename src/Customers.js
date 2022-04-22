import React from 'react'
import Table from 'react-bootstrap/Table';

export const Customers = ({customers}) => {

    const CustomerRow = (customer,index) => {

        return(
              <tr key = {index} className='even'>
                  <td> {index + 1} </td>
                  <td>{customer.user_id}</td>
                  <td>{customer.name_id}</td>
                  <td>{customer.email}</td>
                  <td>{customer.app_id}</td>
                  <td>{customer.version}</td>
                  <td>{customer.login_time}</td>
              </tr>
          )
      }

      const CustomerTable = customers.map((cust,index) => CustomerRow(cust,index))

      const tableHeader = <thead className='bgvi'>
                            <tr>
                                <th>#</th>
                                <th>USERID</th>
                                <th>NAME_ID</th>
                                <th>EMAIL</th>
                                <th>APPID</th>
                                <th>VERSION</th>
                                <th>LOGIN_TIME</th>
                            </tr>
                        </thead>
    
    return (
        <Table striped bordered hover>
            {tableHeader}
            <tbody>
                {CustomerTable}
            </tbody>
        </Table>
    )
}