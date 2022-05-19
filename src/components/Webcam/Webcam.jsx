import React, { useState } from 'react';
import Webcam from "react-webcam";


const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
};

export const WebcamCapture = () => {

    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null);

    
    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
        });


    return (
        <div className="uk-sortable uk-text-center" uk-sortable>
            <div className="uk-card uk-card-default uk-card-hover">
                <div className="uk-card-header">
                    <h3 class="uk-logo">Take Photos</h3>
                </div>
                <div class="uk-card-media-top uk-margin-medium-top">
                    {image == '' ? <Webcam
                        className="uk-border-circle"
                        audio={false}
                        height={255}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={250}
                        videoConstraints={videoConstraints}
                    /> : <img className="uk-border-circle" src={image} />}
                </div>
            
            <div className="uk-card-body">
                <p >Lorem ipsum dolor sit amet. Ex corporis galisum et galisum quod rem cumque inventore.</p>
                
            </div>
            <div className="uk-card-footer">
            {image != '' ?
                    <button onClick={(e) => {
                        e.preventDefault();
                        setImage('')
                    }}
                        className="uk-button uk-button-primary uk-border-rounded uk-margin-medium-top">
                        Retake Image</button> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                        className="uk-button uk-button-primary uk-border-rounded uk-margin-medium-top">Capture</button>
                }
            </div>
            </div>
        </div>
    );
};
