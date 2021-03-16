import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { ProductCard } from './components/product-card';

function App() {
  const [products, setProducts] = React.useState();
  const [selections, setSelections] = React.useState([]);

  const handleSelect = (productId) => () => {
    if(selections.includes(productId)) {
      const newSelections = [...selections];
      newSelections.splice(newSelections.indexOf(productId), 1);

      setSelections(newSelections);
    } else {
      setSelections([...selections, productId]);
    }
  };

  const handleRemoveSelections = () => {
    setSelections([]);
  }

  React.useEffect(() => {
    axios.get('https://run.mocky.io/v3/fca7ef93-8d86-4574-9a4a-3900d91a283e')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Button onClick={handleRemoveSelections} disabled={!selections.length}>
          { `Remove ${selections.length ? `${selections.length} ` : ''}selected product${selections.length !== 1 ? 's' : ''}` }
        </Button>
        <Grid container spacing={2}>
          {products && products.map((product) => (
            <ProductCard 
              product={product} 
              handleSelect={handleSelect} 
              selected={selections.includes(product.productId)} />
          ))}
        </Grid>
      </Container>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, Helvetia, sans-serif;
  }
` 

const Button = styled.button`
  width: 240px;
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
  font-family: Arial, helvetica, sans-serif;
  font-size: 16px;
  ${({ disabled }) => disabled && `
    background: #bbb;
    cursor: not-allowed;
    &:hover {
      background: #bbb;
    }    
  `} 
`;

export default App;



