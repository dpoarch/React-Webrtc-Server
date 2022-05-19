import React, { useState } from 'react'
import './Home.css'
import { WebcamCapture} from '../Webcam/Webcam'


const Home = () => {
    
    return (
        <div className="home-container">
            <div className="uk-grid" uk-grid>
                <div className="uk-width-1-3">
                    <div className="uk-card uk-card-default uk-card-body uk-width-1-2 nav">
                            <ul className="uk-nav-default uk-nav-parent-icon" uk-nav>
                                <li className="uk-nav-header">Dashboard</li>
                                <li><a ><span className="uk-margin-small-right" uk-icon="icon: thumbnails"></span> Home</a></li>
                                <li><a ><span className="uk-margin-small-right" uk-icon="icon: pencil"></span> Posts</a></li>
                                <li><a ><span className="uk-margin-small-right" uk-icon="icon: table"></span> Images</a></li>
                                

                                <li className="uk-nav-header">Settings</li>
                                <li className="uk-parent">
                                    <a >Parent</a>
                                    <ul className="uk-nav-sub">
                                        <li><a >Sub item</a></li>
                                        <li><a >Sub item</a></li>
                                    </ul>
                                </li>
                                <li className="uk-parent">
                                    <a >Parent</a>
                                    <ul className="uk-nav-sub">
                                        <li><a >Sub item</a></li>
                                        <li><a >Sub item</a></li>
                                    </ul>
                                </li>
                                
                            </ul>
                        </div>
                </div>
                <div className="uk-width-1-3">
                    
                        <WebcamCapture/>
                    
                </div>
            </div>
        </div>
    )
}
export default Home
