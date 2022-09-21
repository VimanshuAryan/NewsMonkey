import React, { Component } from 'react'

export class NewsItem extends Component {
  
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl ? imageUrl : "https://techcrunch.com/wp-content/uploads/2022/09/07edb091bb329145ee3f3f01476adb40acc6457b.jpg?resize=1200,675"} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl} target = "_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </>
        )
    }
}

export default NewsItem