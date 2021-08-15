import React, { Component } from 'react'
import LikeBtn from '../LikeBtn/LikeBtn'
import './Comments.css'

export default class Comments extends Component {
    render() {
        return (
            <div className="comment">
                <div className="comment-body">
                   {this.props.content}
                </div>
                <LikeBtn />   
            </div>
        )
    }
}
