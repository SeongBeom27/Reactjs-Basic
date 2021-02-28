import React from 'react';
import PropTypes from 'prop-types';

// class Component ( state를 위해서 사용 )

// react는 자동으로 class component의 render method를 자동으로 실행시킨다.
class App extends React.Component{
    constructor(props){
        super(props);
        // class component 의 특징 : state가 있다는 점??
        this.state = {
            count: 0
        }
        this.add = () => {
            console.log("add");
        };
        this.minus = () => {
            console.log("minus");
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