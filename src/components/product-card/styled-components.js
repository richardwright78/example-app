import styled from 'styled-components';
import PaperBase from '@material-ui/core/Paper';
import CheckboxBase from '@material-ui/core/Checkbox';

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
  ${({reduced}) => reduced && `
    text-decoration: line-through;
    color: red;
  `}
`;

export { Paper, ProductContainer, CheckBox, PromotionBadge, Description, Price }