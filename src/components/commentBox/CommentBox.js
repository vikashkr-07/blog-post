import React, { Component } from 'react'
import Comments from '../comments/Comments'
import './CommentBox.css'

export default class CommentBox extends Component {
    state = {
        count: 0,
        comment: "",
        comments: []
      };
    
      updateValue = val => {
        this.setState({ comment: val });
      };
    
      addNewComment = () => {
        const newComment = { caption: this.state.comment };
        this.setState({ comment: "" });
        let comments = [...this.state.comments, newComment];
        this.setState({ comments: comments });
        // console.log([...this.state.comments]);
        // console.log(comments);
      };
    
      render() {
        return (
          <div className="comment-box">
            <div className="new-comment">
              <input
                type="text"
                placeholder="type your comment here"
                onChange={e => this.updateValue(e.target.value)}
                value={this.state.comment}
              ></input>
              <button onClick={this.addNewComment}>Comment</button>
            </div>
            <div> {this.state.comments.length > 0 ? <b>Comments</b> : null}</div>
            <div className="comment-list">
              {this.state.comments.map(comment => (
                <Comments content={comment.caption} />
              ))}
            </div>
          </div>
        );
      }
    }
