import Carosello from "./Carosello";

const Home = () => {
  const harryPotter = "harry%20potter";
  const marvelUniverse = "marvel";
  const starWars = "star%20wars";
  return (
    <>
      <Carosello mySaga={harryPotter} name="Harry Potter" className="text-white" />
      <Carosello mySaga={marvelUniverse} name="Marvel Universe" />
      <Carosello mySaga={starWars} name="Star Wars" />
    </>
  );
};

export default Home;