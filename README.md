# Movie App 2021

React JS Fundamentals Course


//js es6 {}               jsx + props
function Food({fav}){
  return <h1>I like {fav}</h1>;

}

const foodILike = [{}]
// food component에 fav라는 이름의 property를 kimchi라는 value로 줌
// prop == property
function App() {
  return (
    <div>
      <Food fav="kimchi" /> 
    </div>
  );
}
