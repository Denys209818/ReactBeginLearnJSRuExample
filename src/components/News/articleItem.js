import React, { Component } from 'react'

export class ArticleItem extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        isOpen: this.props.isOpen
    };

    componentWillReceiveProps(nextProps) 
    {
        if(this.state.isOpen !== nextProps.isOpen)
        {
                this.setState({
                    isOpen: nextProps.isOpen
                });
            return true;
        }
        return false;
    }

    render() {
        var el = this.props.articleItem;
        const body = this.state.isOpen && <div className="card-body">
        <div className="card-text">{el.text}</div>
            <a href="#" className="card-link">Прочитати детальніше</a>
        </div>;
        return (
            <li className="li__decoration__none mt-3">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title float-start">{el.title}</h4>
                        <button className="btn btn-success float-end" onClick={this.clickHideShowButton} >
                        {this.state.isOpen ? "Сховати" : "Відкрити"}</button>
                    </div>
                    {body}
                </div>
            </li>
        )
    }

    clickHideShowButton = () => {
        
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

export default ArticleItem
