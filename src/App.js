import * as React from 'react';
import styled from 'styled-components';
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
    console.log('CLICK');
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
      <Container>
        <Button onClick={handleRemoveSelections}>{ `Remove ${selections.length} selected products` }</Button>
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
  font-family: Arial;
`;

export default App;



