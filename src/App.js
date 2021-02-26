import React from 'react';

const foodILike = [
    {
      id: 1,
      name: "Kimchi",
      image:
        "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
    },
    {
      id: 2,
      name: "Samgyeopsal",
      image:
        "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
    },
    {
      id: 3,
      name: "Bibimbap",
      image:
        "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
    },
    {
      id: 4,
      name: "Doncasu",
      image:
        "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
    },
    {
      id: 5,
      name: "Kimbap",
      image:
        "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
    }
  ];

  function Food(props){
    return (
        <div>
            <h2>I like {props.name}</h2>
            <img src={props.picture}/>
        </div>
        
    );
}

function App() {
    // kimchi와 같이 전달한 인자들을 props라고 부르자.
    return (
        <div>
            {
                foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image}/>)
                // map에서 반환되는 값이 renderFood 의 인자로 들어간다.
                //foodILike.map(renderFood)
            }
        </div>
    );
}

export default App;