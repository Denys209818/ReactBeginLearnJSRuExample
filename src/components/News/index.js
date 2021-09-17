import React, { Component } from 'react'
import Article from './article'
import articlesData from '../../data'

export class News extends Component {
    render() {
        return (
            <div className="container mt-3">
                <h1 className="text-center">Список новин</h1>

                <Article articles={articlesData}/>
            </div>
        )
    }
}

export default News
