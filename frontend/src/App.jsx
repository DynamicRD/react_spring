import React from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './include/Header';
import Syntax from './test/Syntax';
import Variable from './test/Variable';
import State from './test/State';
import Count from './test/Count';
import Loop from './test/Loop';
import Question from './survey/Question';
import Summary from './survey/Summary';

function App() {
  console.warn = function no_console() {}; //콘솔창에 경고내용을 보여주지 마라
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 기초문법-길동팀원 */}
          <Route path="/test" element={<Syntax />} />
          <Route path="/test/variable" element={<Variable />} />
          <Route path="/test/state" element={<State />} />
          <Route path="/test/count" element={<Count />} />
          <Route path="/test/loop" element={<Loop />} />
          {/* 설문조사-동길팀원 */}
          <Route path="/survey/question" element={<Question />} />
          <Route path="/survey/summary" element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
