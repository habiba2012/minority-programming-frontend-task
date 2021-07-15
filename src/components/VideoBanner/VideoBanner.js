import React from 'react';
// import Videojs from 'video.js';
import MpVideo from '../../assets/video/video1.mp4'


const VideoBanner = () => {
    const videoJsOptions = {
        autoplay: true,
        /*   playbackRates: [0.5, 1, 1.25, 1.5, 2],
          width: 720,
          height: 300,
          controls: true, */
        sources: [
            {
                src: MpVideo,
                type: 'video/mp4',
            },
        ],
    };
    return (
        <video
            id="my-video"
            class="video-js"
            autoplay="true"
            controls="true"
            loop="true"
            preload="auto"
            width="640"
            height="400"
            fluid="true"
            poster='../../assets/globe.svg'
            data-setup="{}"
        >
            <source src={MpVideo} type="video/mp4" />

        </video>
    );
};

export default VideoBanner;