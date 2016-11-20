import React from 'react';
import VideoListItem from './video_list_item';

// props are passed in as an argument and only available within that block
// in a class-based componet props are available anywhere
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem 
        onVideoSelect={ props.onVideoSelect }
        key={ video.etag } 
        video={ video } />);
  });

  return (
    <ul className="col-md-4 list-group">
      { videoItems }
    </ul>
  );
};

export default VideoList;