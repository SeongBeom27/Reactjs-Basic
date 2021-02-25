import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Potato from './Potato';
/**
 * Component
 * 
 * <App /> : 이 부분을 react에서 component라고 부른다
 * 
 *      동작 : HTML을 반환하는 함수
 *      -> 리액트는 컴포넌트로 이루어져 있다. ( 컴포넌트로 HTML 코드를 표시한다. ) 
 * 
 *      Javascript와 HTML 사이 이러한 조합을 jsx라고 부른다. ( In React )
 *  */ 
ReactDOM.render( <App />, document.getElementById('potato'));

