import * as React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import PaperBase from '@material-ui/core/Paper';
import CheckboxBase from '@material-ui/core/Checkbox';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { StockLevel } from './stock-level';

const ProductCard = ({product, handleSelect, selected}) => {
  const { name, productId, promotionBadge, price, priceWas, quantity, available:availableString, lowOnStock:lowOnStockString} = product;
  const available = (availableString === 'TRUE');
  const lowOnStock = (lowOnStockString === 'TRUE');
  const smallScreen = useMediaQuery('(max-width:600px)');

  if(!available) {
    return null;
  }

  return (
    <Grid item xs={6} md={4} lg={3}>
        <Paper>
          {quantity > 0 && <CheckBox checked={selected} onClick={handleSelect(productId)} size={smallScreen ? 'small' : 'medium'} />}
          <ProductContainer>
            <img src={product.imageUrl} width="100%" alt={name} />
            {promotionBadge && <PromotionBadge>{promotionBadge}</PromotionBadge>}
          </ProductContainer>
          <Description>
            {name}
            <br/><br/>
            <Price>{`£${price} `}</Price>
            <Price reduced>{`£${priceWas}`}</Price>
            <StockLevel available={available} quantity={quantity} lowOnStock={lowOnStock} />
          </Description>
        </Paper>
    </Grid>
  )
}

const Paper = styled(PaperBase)`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ProductContainer = styled.div`
  position: relative;
`;

const CheckBox = styled(CheckboxBase)`
  position: absolute;
  z-index: 1;
`;

const PromotionBadge = styled.div`
  background: red;
  opacity: 0.5;
  width: fill-available;;
  padding: 8px;
  color: white;
  position: absolute;
  bottom: 3px;
  text-align: center;
  font-weight: bold;
`;

const Description = styled.div`
  padding: 16px;
`;

const Price = styled.span`
  font-weight: bold;
  padding-top: 32px;
  ${({reduced}) => reduced && 'text-decoration: line-through;'}
  ${({reduced}) => reduced && 'color: red;'}
`;

export { ProductCard }