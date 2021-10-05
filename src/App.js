import React from 'react';
import './App.css';
import IdCard from "./components/IdCard";
import Greetings from './components/Greetings';
import Random from "./components/Random";
import BoxColor from "./components/BoxColor"
import CreditCard from "./components/CreditCard"
import Rating from "./components/Rating"
import DriverCard from "./components/DriverCard"

function App() {
  return (
    <div className="App">
    
      <IdCard
        firstName="Enma"
        lastName="Thompson"
        gender="female"
        height={173}
        birth={new Date ("1959-04-15")}
        picture="http://colchide.com/wp-content/uploads/Emma-Thompson-01-1.jpg"
      />
      <IdCard
        firstName="Julieta"
        lastName="xlf"
        gender="female"
        height={168}
        birth={new Date ("1982-11-09")}
        picture="https://lh3.googleusercontent.com/proxy/kOvShAk4o8WNY-5fOrLz8MYebs4tC7-VEztlES0aCdFk7a34XkvSYp-d4R8tDE8-8A43b8K594hdso-6eVvj5yVXiEaojmqdLa6eXP3sN8sZD1jNVI1KJ5fYXKJkkg" width="100px"
    />
    <IdCard
        firstName="Jim"
        lastName="Parsons"
        gender="male"
        height={186}
        birth={new Date ("1973-03-24")}
        picture="https://media.gettyimages.com/photos/actor-jim-parsons-attends-the-89th-annual-academy-awards-at-hollywood-picture-id645649390?s=612x612"
        />
    <IdCard
        firstName="Enma"
        lastName="Stone"
        gender="female"
        height={168}
        birth={new Date ("1988-11-06")}
        picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-wiIwaQYFwKMiow49UNHM2YS7ewZOjIuB5t5Uq8I--uvs0ltAVWO8_AqLCJqs2XveKZk&usqp=CAU"/>

    <IdCard
        firstName="Pierce"
        lastName="Brosnan"
        gender="male"
        height={187}
        birth={new Date ("1953-05-16")}
        picture="https://www.piercebrosnan.com/wp-content/uploads/2017/05/pb2.jpg"/>  
    <IdCard
        firstName="Alf,"
        lastName="from Melmac"
        gender="male"
        height={83}
        birth={new Date ("1756-10-28")}
        picture="https://static2.elcorreo.com/www/multimedia/201808/02/media/cortadas/alf-kePF-U60530015169X5H-624x385@RC.jpg"/>  
    <br/>
    <Greetings
      lang="de"
      children= "Anja"/>
    <Greetings
      lang="es"
      children= "Paula"/>
    <Greetings
      lang="fr"
      children= "Estée"/>
    <Greetings
      lang="en"
      children= "Joseph"/>

      <Random
      min={new String("1")}
      max={new String("100")}/>
      <Random
      min={0}
      max={700}/>
      <Random
      min={99}
      max={999}/>

        {/* <Random {new String("value")}/> */}
      <BoxColor
          r={255} g={0} b={0}/>
      <BoxColor
          r={128} g={255} b={0}/>

      <CreditCard
          type="Master Card"
          number="2348895679325674"
          expirationMonth={9}
          expirationYear={25}
          bank="Deutsche Bank"
          owner = "Pimpollo García"
          bgcolor ="#20B2AA"
          color ="white"
      />

      <CreditCard
          type="Visa"
          number="44867423210982356"
          expirationMonth={3}
          expirationYear={26}
          bank="La Caixa"
          owner = "Andrés Calamaro"
          bgcolor ="#2271b3"
          color ="white"
      />

    <CreditCard
          type="Visa"
          number="2264893512424922"
          expirationMonth={11}
          expirationYear={23}
          bank="Santander"
          owner = "Joe Black"
          bgcolor ="#BEBEBE"
          color ="black"
      />
    </div>

  );
}

export default App;
