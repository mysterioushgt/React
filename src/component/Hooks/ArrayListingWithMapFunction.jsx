import React from 'react'

function ArrayListingWithMapFunction() {
    const studnets = [
        { name: "anil", email: "ram@gmail.com", phone: 111 },
        { name: "ram", email: "ram@gmail.com", phone: 111 },
        { name: "raj", email: "ram@gmail.com", phone: 7478784 },
        { name: "anil", email: "ram@gmail.com", phone: 7478784 },
    ]
    return (
        <div>
            <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
            {
                studnets.map((data,i)=>
                <tr>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                </tr>
            )
            }
        </table>
        </div>
    )
}

export default ArrayListingWithMapFunction