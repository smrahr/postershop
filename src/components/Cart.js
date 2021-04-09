import React, { Component } from 'react'

export default class Cart extends Component {
    renderOrders = (index) =>{
        const products = this.props.products;
        const count = this.props.orders[index];
        return(
            <li key={index}>
                {count} {products[index]['title']}  price: {products[index]['price']}
                <span onClick={()=>{this.props.deleteOrder(index)}}>&times;</span>
            </li>
        )

    }

   
    render() {
        const total = 
            Object.keys(this.props.orders).reduce( (total,index)=>{
                const products = this.props.products;
                const count = this.props.orders[index]; 
                return total + (products[index]['price'] * count)
            } , 0 )
        
        return (
            <div className='cart'>
                <h2>Cart</h2>
                <ul>
                    {Object.keys(this.props.orders).map(this.renderOrders)}    
                </ul>
                <div className='totalprice'>
                    {total}
                </div>
            </div>
        )
    }
}
