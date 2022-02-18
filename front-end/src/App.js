import './App.css';
import { useEffect, useState } from 'react';
import {
  Table,
  Container,
} from "reactstrap";

function App() {
  const url = 'http://localhost:8080/wands/get-all';
  const [wands, setWands] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setWands(responseJSON);
  }
  useEffect(() => {
    fetchApi()
  }, [])
  return (
    <>
    <h1 style={{align:"center"}}>WandApp Nara - The WandyPedia</h1>
    <Container>
    <br />
      <br />
      <br />
      <Table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title (Owner)</th>
            <th>Short description</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {!wands ? 'Loading...' :
          wands.map((wand, index) => (
            <tr key={index}>
              <td><div><img style={{align:"center", width:"100px"}} src={wand.image}/></div></td>
              <td>{wand.title}</td>
              <td>{wand.shortDescription}</td>
              <td style={{marginBlock:"5px"}}>{wand.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  </>
  );
}

export default App;
