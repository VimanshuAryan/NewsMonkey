import React, { Component } from 'react'
import Spinner from '../UI/Spinner';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {
    // articles = [
    //     {
    //         "source": {
    //             "id": "google-news-uk",
    //             "name": "Google News (UK)"
    //         },
    //         "author": "Mark Brown",
    //         "title": "Police call for calm after ‘serious disorder’ breaks out in Leicester",
    //         "description": "Two arrested during latest disturbance in east of city after cricket match last month between India and Pakistan",
    //         "url": "https://amp.theguardian.com/uk-news/2022/sep/18/police-community-leaders-crowds-leicester",
    //         "urlToImage": "https://i.guim.co.uk/img/media/484881bb217760b519992c8fcf09424e01791f8f/3_106_1023_614/master/1023.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d61260b61bf748f298be6f850539113e",
    //         "publishedAt": "2022-09-18T11:48:00+00:00",
    //         "content": "Police and community leaders have called for calm after large crowds gathered and serious disorder broke out overnight in Leicester.\r\nTwo arrests were made and a large number of people were searched … [+2464 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "espn-cric-info",
    //             "name": "ESPN Cric Info"
    //         },
    //         "author": null,
    //         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    //         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    //         "publishedAt": "2020-04-27T11:41:47Z",
    //         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "espn-cric-info",
    //             "name": "ESPN Cric Info"
    //         },
    //         "author": null,
    //         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    //         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    //         "publishedAt": "2020-03-30T15:26:05Z",
    //         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    //     }
    // ]

    static defaultProps = {
        country: 'in',
        pageSize: '6',
        category: 'general'
    }

    static defaultPropTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }

    async update() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=460ded1b747b454f9d0a1a5c26429216&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            loading: false,
            totalResults: parsedData.totalResults,
        });
    }

    async componentDidMount() {
        // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=460ded1b747b454f9d0a1a5c26429216&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: false
        // });
        this.update();
    };

    previousClickHandler = async () => {
        // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=460ded1b747b454f9d0a1a5c26429216&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({
        //     articles: parsedData.articles,
        //     page: this.state.page - 1,
        //     loading: false
        // });
        this.setState({
            page: this.state.page - 1
        })
        setTimeout(() => {
            this.update();
        }, 1000); 
    };

    nextClickHandler = async () => {
        if (Math.ceil(this.state.totalResults / this.props.pageSize) < this.state.page + 1) {

        } else {
            // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=460ded1b747b454f9d0a1a5c26429216&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            // this.setState({ loading: true });
            // let data = await fetch(url);
            // let parsedData = await data.json();
            // this.setState({
            //     articles: parsedData.articles,
            //     page: this.state.page + 1,
            //     loading: false
            // });
            this.setState({
                page: this.state.page + 1
            })
            setTimeout(() => {
                this.update();
            }, 1000); 
        }

    };

    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center" style={{margin:'35px'}}>NewsMonkey - Top Headlines</h2>
                {this.state.loading && <Spinner />}
                <div className="row my-3">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div key={element.url} className="col-md-4">
                            <NewsItem
                                title={element.title}
                                // title={element.title ? element.title.slice(0, 45) : ""}
                                description={element.description}
                                // description={element.description ? element.description.slice(0, 88) : ""}
                                imageUrl={element.urlToImage}
                                newsUrl={element.url}
                                source={element.source.name}
                                author={element.author}
                                date={element.publishedAt} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.previousClickHandler}>&larr; Previous</button>
                    <button type="button" disabled={(Math.ceil(this.state.totalResults / this.props.pageSize) < this.state.page + 1)} className="btn btn-dark" onClick={this.nextClickHandler}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News