import './App.css';
import Header from './Components/Header';
import { Box } from '@material-ui/core';
import { fetchData } from './service/api';
import { useEffect, useState } from 'react';
import Characters from './Components/Characters'
import Pagination from './Components/Pagination';
import Footer from './Components/Footer';


const App = () => {

  const [text, setText] = useState("")
  const [data, setData] = useState([])

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(10);


  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const result = await fetchData(text)
      setData(result.data)
      setLoading(false);
    }
    getData();
  }, [text]);



  const getText = (text) => {
    setText(text);
  }

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharcter= indexOfLastCharacter - charactersPerPage;
  const currentCharacters= data.slice(indexOfFirstCharcter, indexOfLastCharacter);
  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <Box>

      <Header getText={getText} />

      <Pagination
        charactersPerPage={charactersPerPage}
        totalCharacters={data.length}
        paginate={paginate}/>
     
      <Characters data={currentCharacters} loading={loading} />
      
      <Footer/>
    </Box>
 

  );
}


export default App;
