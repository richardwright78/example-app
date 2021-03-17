import React from 'react';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Paper, ProductContainer, CheckBox, PromotionBadge, Description, Price } from './styled-components';
import { StockLevel } from '../stock-level';

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

export { ProductCard }