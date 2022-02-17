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
    // console.log('Response =', response.statusText);
    const responseJSON = await response.json();
    setWands(responseJSON);
    // console.log(responseJSON);
  }
  useEffect(() => {
    fetchApi()
  }, [])
  return (
    <>
    {/* <div className="App">
      <h1>Wand App</h1>
      <br />
      { !wands ? 'Loading...' :
      wands.map( (wand, index) => {
        return <li key={index}>{wand.title}</li>
      })
      }
    </div> */}
    <h1>Wand App</h1>
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
            <tr key={wand.id}>
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
