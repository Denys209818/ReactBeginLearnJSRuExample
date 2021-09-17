import React, { Component } from 'react'
import '../News/style.css'
import ArticleItem from './articleItem';

export class Article extends Component {
    constructor(props) 
    {
        super(props);

    }

    state = {
        isReverse: false
    };

    render() {
        const { articles } = this.props;
        
        var counter = this.state.isReverse ? articles.length-1 : 0;
        const liElements = articles.map((el, index) => {
            
            return <ArticleItem key={el.key} articleItem={el} 
            indexItem={index} isOpen={index === counter}/>
        });

        
        return (
        <div className="container">
            <button className="ms-5 btn btn-primary my-4" onClick={this.reverseNews}>Перевернути список новин</button>
            <ul>
                {this.state.isReverse ? liElements.reverse() : liElements}
            </ul>
        </div>
        );
    }

    reverseNews = () => {
            this.setState({
                isReverse: !this.state.isReverse
            });
    }
}

export default Article
