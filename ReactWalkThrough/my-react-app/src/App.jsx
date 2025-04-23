import Button from "./Button"
import Card from "./Card"
import Food from "./Food"
import Footer from "./Footer"
import Header from "./Header"
import List from "./List"
import MyComponent from "./MyComponent"
import UserGreeting from "./UserGreeting"

function App() {

  //props and lists

  const fruits = [{id: 1, name: "apple", cal: 10},
    {id: 2, name: "Orange", cal: 20},
    {id: 3, name: "Banana", cal: 30}]

    const veggies = [{id: 1, name: "apple", cal: 10},
      {id: 2, name: "Orange", cal: 20},
      {id: 3, name: "Banana", cal: 30}]

  return (
    <>
     <UserGreeting isLoggedIn={true} username="SyedJaleed"/>
     <List items={fruits} category="fruits"/>
     <List items={veggies} category="veggies"/>
     <Button/>
     <MyComponent/>
    </>
  )
}

export default App
