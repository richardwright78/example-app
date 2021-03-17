import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { ProductCard } from './components/product-card';
import { GlobalStyle, Button } from './styled-components';

function App() {
  const [products, setProducts] = useState();
  const [selections, setSelections] = useState([]);

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

  useEffect(() => {
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
              key={product.productId} 
              product={product} 
              handleSelect={handleSelect} 
              selected={selections.includes(product.productId)} />
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;



