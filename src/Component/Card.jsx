import React from "react";

const Card = ({ info }) => {
  if (!info) {
    // console.log("Card received undefined info");
    return <div>Loading...</div>;
  }

  // Safely destructuring with optional chaining
  const { snippet, statistics } = info || {};
  const { channelTitle, title, thumbnails } = snippet || {};

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        className="rounded-xl "
        alt="thumbnails"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default Card;
