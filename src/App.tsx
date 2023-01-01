import {useState} from 'react';
import axios from 'axios';
import { 
  Wrapper, 
  Row, 
  Header, 
  Image, 
  Form, 
  Search, 
  Button } from './components/styled';
import owl from "./images/owl.svg";
import JokeItem from './components/JokeItem';
import { Joke } from './common/types';
import { BsGithub } from 'react-icons/bs';
import { AiFillCode,AiFillLinkedin } from 'react-icons/ai';

const BASE_URL = "https://v2.jokeapi.dev/joke/Any";

const App = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [jokes, setJokes] = useState<Joke[]>([]);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const getJokes = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const ENDPOINT = `${BASE_URL}?contains=${search}&amount=10`;
    const { data } = await axios.get(ENDPOINT);
    if(data.error){
      setError(true);
      setJokes([]);
    }else {
      setError(false);
      setJokes(data.jokes);
    }
    setSearch("");
  }
  
  return (
    <div>
      <Wrapper>
        <Row>
          <Header>Joker</Header>
          <Image src={owl} alt="owl" />
        </Row>

        <Form onSubmit={getJokes} >
          <Search 
            type="text"
            placeholder='Search..'
            value={search}
            onChange={handleChange}  />
            <Button type='submit'>Submit</Button>
        </Form>
        {/*JOKES*/}
        <div>
          { error &&
            <p>{`Sorry, no jokes found :(`}</p>
          }
          { jokes.length > 0 &&
            // @ts-ignore
            jokes.map(joke => <JokeItem key={joke.id} joke={joke}/> )
          }
        </div>
      </Wrapper>
      <Wrapper>
            <a className="me-5" href="https://github.com/cryptobcu" target="_blank">
                <BsGithub size={30} />
            </a>
            <a className="me-5" href="https://github.com/cryptobcu/joker-react-typescript" target="_blank">
                <AiFillCode size={30} />
            </a>
            <a className="me-5" href="https://www.linkedin.com/in/bekir-uyumaz/" target="_blank" >
                <AiFillLinkedin size={30} />
            </a>
      </Wrapper>
    </div>
  )
}

export default App;