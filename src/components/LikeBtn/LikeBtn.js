import React, { Component } from 'react'
import './LikeBtn.css'
import { AiTwotoneLike } from "react-icons/ai";


export default class LikeBtn extends Component {
    constructor(props){
        super(props);
        this.state={
            likeCount:0
        }
    }

    clickHandle = () =>{
        this.setState({
            likeCount:this.state.likeCount+1
        });
    }
    render() {
        const {likeCount}=this.state;
        return (
            <div className="like-box">
                <button className="like-btn" onClick={this.clickHandle}>
                  <AiTwotoneLike />
                  Like
                </button>
                {
                    this.state.likeCount > 0 ?(
                        <span>
                            {likeCount} {likeCount > 1 ? "Likes" : "Like"}
                        </span>
                    ) : null
                }
            </div>
        )
    }
}
