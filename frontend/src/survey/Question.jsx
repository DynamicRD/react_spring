import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router';

export default function Question() {
  //변수
  const url = 'http://localhost:8080/survey/view/1';
  const [item, setItem] = useState([]);
  const [rdo, setRdo] = useState();
  const navigate = useNavigate();

  //이벤트 멤버 함수(화살표): 공동
  //서버에게 요청하는 방식(fetch)
  function getItem(url) {
    fetch(url)
      .then((response) => response.json()) // 올바르게 fetch 결과를 처리
      .then((data) => {
        setItem(data);
      });
  }
  //라디오버튼을 눌렀을때 상태값 저장
  const handleOptionChange = (e) => {
    setRdo(e.target.value);
  };

  //서버로부터 데이터 요청(화면이 랜더링이 될때 처음요청: 마운트 요청)
  useEffect(() => {
    //get 방식으로 서버에게 요청
    getItem(url);
  }, []);

  //화면렌더링 {item },map,filter
  return (
    <Container className="text-center p-5">
      <h2 className="text-center">{item.QUESTION}문제</h2>

      <label>
        <input
          className="ms-3"
          name="answer"
          type="radio"
          value="1"
          checked={rdo === '1'}
          onChange={handleOptionChange}
        />
        {item.ANS1}문항1
      </label>
      <label>
        <input
          className="ms-3"
          name="answer"
          type="radio"
          value="2"
          checked={rdo === '2'}
          onChange={handleOptionChange}
        />
        {item.ANS2}문항2
      </label>
      <label>
        <input
          className="ms-3"
          name="answer"
          type="radio"
          value="3"
          checked={rdo === '3'}
          onChange={handleOptionChange}
        />
        {item.ANS3}문항3
      </label>
      <label>
        <input
          className="ms-3"
          name="answer"
          type="radio"
          value="4"
          checked={rdo === '4'}
          onChange={handleOptionChange}
        />
        {item.ANS4}문항4
      </label>
      {/* 이벤트로 현 정보를 서버로 보낸다 */}
      <Button
        variant="outline-danger"
        className="ms-3"
        onClick={() => {
          const form = new FormData();
          form.append('survey_idx', item.SURVEY_IDX);
          form.append('num', rdo);
          fetch('http://localhost:8080/survey/insert', {
            method: 'post',
            body: form,
          }).then(() => {
            navigate('/survey/summary');
          });
        }}
      >
        확인
      </Button>
    </Container>
  );
}
