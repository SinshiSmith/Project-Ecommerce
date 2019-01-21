import React, { Component } from 'react'
import { ProductConsumer } from '../../context';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const {cart} = value;
            return (
              (cart && cart.length > 0) ?
              (
                <>
                  <Title name="your" title="Cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </>
              ) :
              <EmptyCart />
            )

          }}
        </ProductConsumer>
      </section>
    )
  }
}
