
import React, { Component } from 'react';
import CommentBox from '../commentBox/CommentBox';
import LikeBtn from '../LikeBtn/LikeBtn';
import './Blog.css'

export default class Blog extends Component {
    
    render() {

        // console.log(this.props.feed);
        const{title,caption,url}=this.props.feed;
        return (
            <div className="blog-post">
                <img className="blog-img" src={url} alt="img" />
                <div className="blog-header">
                    <span className="blog-title">{title}</span>
                    <LikeBtn />
                </div>

                <div className="blog-caption">{caption}</div>
                <CommentBox />
            </div>
        )
    }
}
