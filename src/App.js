import * as React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import PaperBase from '@material-ui/core/Paper';
import axios from 'axios';

function App() {
  const [products, setProducts] = React.useState();

  React.useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get('https://run.mocky.io/v3/fca7ef93-8d86-4574-9a4a-3900d91a283e');
        console.log(response);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getProducts();
  }, []);

  return (
    <>
      <Container>
        <Button>Remove 3 selected products</Button>
        <Grid container spacing={2}>
          {products?.map((product) => (
             <Grid item xs={6} md={4} lg={3}>
             <Paper>
               <img src={product.imageUrl} width="100%" alt={product.name} />
             </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;

const Paper = styled(PaperBase)`
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  cursor: pointer;
  background: #900FF4;
  color: white;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem 0;
  border: none;
  &:hover {
    background: #460876
  }
`;



