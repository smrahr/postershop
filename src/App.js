import React, { Component } from 'react'
import Cart from './components/Cart'
import Products from './components/Products'
import data from './components/data'

export default class App extends Component {

  state= {
    products : data,
    orders :JSON.parse(localStorage.getItem('ordered'))  || {}
  }


  addToCart = (key) =>{
    const orders = {...this.state.orders}
    orders[key] =  orders[key]+1 || 1;
    this.setState({orders})
    localStorage.setItem('ordered', JSON.stringify(orders));
  }

  deleteOrder = (key)=>{
    const orders = {...this.state.orders}
    delete orders[key]
    this.setState({orders})
    localStorage.setItem('ordered', JSON.stringify(orders));
  }

  render() {
    return (
      <div className='wrapper'>
        <Products addToCart={this.addToCart} products={this.state.products} orders={this.state.orders}/>
        <Cart orders={this.state.orders} products={this.state.products} deleteOrder={this.deleteOrder}/>
      </div>
    )
  }
}
