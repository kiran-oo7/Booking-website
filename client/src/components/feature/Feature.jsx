import React from 'react'
import "./Feature.css"

function Feature() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="" className="featuredImage" />
            <div className="featuredTitles">
                <h1>Mumbai</h1>
                <h2>1674 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/684765.webp?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="" className="featuredImage" />
            <div className="featuredTitles">
                <h1>New Delhi</h1>
                <h2>7521 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/684716.webp?k=4c3f55236cffa6597afa0ef11a9f012636f535bf9cc6c0e2ed8142e01fa14766&o=" alt="" className="featuredImage" />
            <div className="featuredTitles">
                <h1>Manali</h1>
                <h2>435 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/684682.webp?k=30cf9de93f2a0f87eed7d2d0d9b3e6eccd5dcf3a4b68b4e0151c0800ddc84af7&o=" alt="" className="featuredImage" />
            <div className="featuredTitles">
                <h1>Lonavala</h1>
                <h2>746 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Feature