import { shallow } from 'enzyme';
import { ProductCard } from '.';
import { CheckBox, PromotionBadge } from './styled-components';

describe('ProductCard', () => {
  const handleSelect = jest.fn();
  let product;

  beforeEach(() => {
    product = {
      productId: 'some id',
      name: "some name",
      description: "some description",
      price: 'some price',
      priceWas: 'some price was',
      available: "TRUE",
      quantity: 10,
      lowOnStock: "FALSE",
      promotionBadge: "some badge",
      imageUrl: "some url"
    } 
  })

  describe('When the product is not available', () => {
    it('Should not render', () => {
      product = { ...product, available: 'FALSE' }
      const component = shallow(<ProductCard product={product} handleSelect={handleSelect} selected />)

      expect(component.isEmptyRender()).toBe(true);
    })
  })

  describe('When the product is available', () => {
    describe('and the quantity is greater than zero', () => {
      it('Should render a CheckBox', () => {
        const component = shallow(<ProductCard product={product} handleSelect={handleSelect} selected />)
  
        expect(component.find(CheckBox)).toHaveLength(1);
      })

      describe('and the CheckBox is clicked', () => {
        it('Should call the handleSelect method with the product id', () => {
          const component = shallow(<ProductCard product={product} handleSelect={handleSelect} selected />);
          const Checkbox = component.find(CheckBox);

          Checkbox.simulate('click');
    
          expect(handleSelect).toBeCalledWith(product.productId);
        })
      })
    })

    describe('and the quantity is zero', () => {
      it('Should not render a CheckBox', () => {
        product = { ...product, quantity: 0 }
        const component = shallow(<ProductCard product={product} handleSelect={handleSelect} selected />)
  
        expect(component.find(CheckBox)).toHaveLength(0);
      })
    })

    describe('and the product has a promotion badge', () => {
      it('Should render a PromotionBadge', () => {
        const component = shallow(<ProductCard product={product} handleSelect={handleSelect} selected />)
  
        expect(component.find(PromotionBadge)).toHaveLength(1);
      })
    })

    describe('and the product does not have a promotion badge', () => {
      it('Should render a PromotionBadge', () => {
        product = { ...product, promotionBadge: '' }
        const component = shallow(<ProductCard product={product} handleSelect={handleSelect} selected />)
  
        expect(component.find(PromotionBadge)).toHaveLength(0);
      })
    })
  })
})