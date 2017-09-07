import React from 'react';
import {Link} from 'react-router-dom';
import ReactReveal from 'react-reveal';
import 'animate.css/animate.css';

const Blocks = (props) => {

    const blockList = ({blockInfo}) =>{
        if(blockInfo){
            return(
                blockInfo.map((item)=>{
                    return(
                        <ReactReveal key={item.id} effect="animated fadeInUp" className={`item ${item.type}`}>
                            <div className="veil"></div>
                            <div className="img" style={{background: `url(/images/blocks/${item.image}) no-repeat`}}></div>
                            <div className="title">
                                <Link to={item.link}>{item.title}</Link>
                            </div>
                        </ReactReveal>
                    )
                })
            )
        }
    }

    const revealHeader = ({blockInfo}) => {
        if(blockInfo){
            return(
                <ReactReveal effect="animated fadeInLeft">
                    <h1 className="highlight">Highlights</h1>
                </ReactReveal>
            )
        }
    }

    return (
        <div style={{overflow: 'hidden'}}>
            {revealHeader(props)}
            <div className = "blocks-container">
                {blockList(props)}
            </div>
        </div>
    )
}

export default Blocks;