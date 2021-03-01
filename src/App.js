import React from 'react';
import PropTypes from 'prop-types';

// class Component ( state를 위해서 사용 )

// react는 자동으로 class component의 render method를 자동으로 실행시킨다.
class App extends React.Component{
    // constructor은 js class를 만들 때 호출되는 것이다.
    // constructor이 가장 먼저 실행되고 그 이후에 render이 호출된다.
    // compoent mounting, updating, unmounting에 대해서 찾아보기 (component가 실행되는 내부 과정이다.)
    constructor(props){
        super(props);
        // class component 의 특징 : state가 있다는 점??
        this.state = {
            count: 0
        }
        /** 
         * 검사를 보면 html code가 계속 바뀌는데, 그 이유가 virutal DOM 이다.
         * 
         * 또한, 이 말은 setState를 호출할 때마다 React가 render 함수를 실행시킨다는 것을 알 수 있다.
         * 
         * 
         *  (아래 add, minus 코드는 같은 코드로 current 함수로 대체할 수 있다.
         *    -> 저 함수가 무엇인지는 알아가보자. )
         * 
         * */ 
        this.add = () => {
            this.setState(current => ({count : current.count + 1}));
        };
        this.minus = () => {
            this.setState({count : this.state.count - 1 });
        };
    }

    render(){
        // add 함수를 호출할 때 add()가 아닌 add인 이유는 immediately 차이
        return (<div>
            <h1>The number is: {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
        </div>
        );
    }
}

export default App;