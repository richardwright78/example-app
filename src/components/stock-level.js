import * as React from 'react';
import styled from 'styled-components';

const StockLevel = ({available, quantity, lowOnStock}) => {
    const showOutOfStock = available && quantity === 0;
    const showQuantityInStock = available && quantity > 0;
    const showLowOnStock = lowOnStock && quantity > 0;

    return (
        <>
          {showOutOfStock && <StockLevelDisplay color="#cc0000">OUT OF STOCK</StockLevelDisplay>}
          {showQuantityInStock && <StockLevelDisplay color="#009900">{`${quantity} in stock`}</StockLevelDisplay>}
          {showLowOnStock && <StockLevelDisplay color="#cc9900">LOW ON STOCK</StockLevelDisplay>}  
        </>
    )
}

const StockLevelDisplay = styled.div`
  ${({ color }) => `color: ${color}`};
  margin-top: 5px;
`;

export { StockLevel }