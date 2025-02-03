import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';

export default function Loop() {
  //객체배열변수
  const [item, setItem] = useState([
    { name: '사과', price: 5000 },
    { name: '포도', price: 4000 },
    { name: '망고', price: 3000 },
  ]);

  return (
    <Container className="mt-3 text-center p-5">
      <h2 className="text-center">상품목록</h2>
      <Table striped bordered hover variant="success">
        <thead>
          <tr>
            <th className="text-bg-primary">번호</th>
            <th className="text-bg-primary">이름</th>
            <th className="text-bg-primary">가격</th>
          </tr>
        </thead>
        <tbody>
          {item.map((data, index) => (
            <tr key={data.name}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
