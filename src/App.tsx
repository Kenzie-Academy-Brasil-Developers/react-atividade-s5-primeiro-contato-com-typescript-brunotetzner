import React from "react";
import { useState, useEffect } from "react";
import { Card } from "./components/card";
import { Input } from "./components/input";
import { Container } from "./styleApp";
interface People {
  name: string;
  age: string;
  hobby: string;
}

function App() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [hobby, setHobby] = useState<string>("");
  const [people, setNewPeople] = useState<People>({} as People);
  const [peoples, setPeoples] = useState<People[]>([]);

  useEffect(() => {
    setNewPeople({ name, age, hobby });
  }, [name, age, hobby]);
  const changePeoples = (name: string, age: string, hobby: string) => {
    setPeoples([...peoples, people]);
  };
  return (
    <Container>
      <header>MyCards</header>
      <div id="form">
        <Input
          placeholder={"nome"}
          label={"Digite um nome"}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder={"idade"}
          label={"DIgite a idade"}
          onChange={(e) => setAge(e.target.value)}
        />
        <Input
          placeholder={"hobby"}
          label={"Digite o hobby"}
          onChange={(e) => setHobby(e.target.value)}
        />
        <button onClick={() => changePeoples(name, age, hobby)}>submit</button>
      </div>
      <div id="cards">
        {peoples.map((people) => (
          <Card name={people.name} age={people.age} hobby={people.hobby} />
        ))}
      </div>
    </Container>
  );
}

export default App;
