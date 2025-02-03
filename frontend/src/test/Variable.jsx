import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Variable() {
  //멤버변수
  let name = 'zeus';
  let message = 'hello';
  return (
    <Container className="mt-3">
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          {name}님 반갑습니다
        </Button>
        <Button className="bg-warning" size="lg">
          {message}
        </Button>
      </div>
    </Container>
  );
}
export default Variable;
