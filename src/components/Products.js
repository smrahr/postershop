import React, { Component } from 'react'

export default class Products extends Component {

    // handelClick= (key) =>{ 
    //     this.props.addToCart(key)     
    // }

    render() {
        return (
            <div className='products'>
                <h2>Products</h2>
                <ul>
                    {this.props.products.map((product,index) => <li key={index} index={index}>
                        <img src={product.src} alt={product.title}/>
                        <h2>{product.title}</h2>
                        <h2>{product.price}</h2>
                        {/* <button onClick={()=>{this.handelClick(product.title)}}>Add to cart</button> */}
                        <button onClick={()=>{this.props.addToCart(index)}}>Add to cart</button>
                    </li>)}
                </ul>
            </div>
        )
    }
}
