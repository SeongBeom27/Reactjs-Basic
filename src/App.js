import React from 'react';

function Food(props){
    console.log(props.name);
    return <h1>I like {props.name}</h1>;
}

function App() {
    // kimchi와 같이 전달한 인자들을 props라고 부르자.
    return (
        <div>
            <h1>Hello!!!!!!!!!!!!!!!</h1>
            <Food name="kimchi"/>
            <Food name="ramen"/>
            <Food name="samiopsal"/>
            <Food name="chukumi"/>
        </div>
    );
}

export default App;