import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function State() {
  //멤버변수(기본타입,객체타입), 멤버함수(계산함수,이벤트핸들러함수)
  const [name, setName] = useState(['kdj', 'zeus', 'hgd']);
  return (
    <Container className="mt-3">
      <div className="d-grid gap-1">
        <Button className="text-bg-primary">{name[0]}</Button>
        <Button className="text-bg-warning">{name[1]}</Button>
        <Button className="text-bg-success">{name[2]}</Button>
      </div>
    </Container>
  );
}
export default State;
