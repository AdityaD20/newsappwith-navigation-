import React, { Component } from 'react'

export class NewsItem extends Component {
  constructor(){
    super();
    console.log("Hello I am constructor ")
  }

  render() {
 let {title, description , imageUrl , newsUrl} = this.props;
    return (
      <div className="my-3">
      <div className="card" style={{width: "18rem"}}>
     <img src= {!imageUrl?"https://static.vecteezy.com/system/resources/thumbnails/028/148/762/small_2x/young-man-animation-style-illustration-free-photo.jpg": imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a rel="noreferrer"  href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More </a>
  </div> 
</div>
      </div>
    )
  }
}

export default NewsItem


