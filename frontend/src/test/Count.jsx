import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

export default function Count() {
  let [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
    console.log('count = ' + count);
  }

  return (
    <Container className="mt-3 text-center">
      <Button variant="outline-danger" className="me-5" onClick={increase}>
        Danger
      </Button>
      {count}
    </Container>
  );
}
