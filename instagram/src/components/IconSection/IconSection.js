import React from "react";
import "./IconSection.sass";

const IconSection = ({ likes, _addLikes, liked }) => {
  const addLikes = () => {
    _addLikes();
  };

  return (
    <>
      {" "}
      <div className="icon-container">
        <i
          className={liked ? `heart icon liked` : `heart outline icon`}
          onClick={addLikes}
        />
        <i className="comments outline icon" />
        <i className="image outline icon" />
      </div>
      <p className="likes">{likes} Likes</p>
    </>
  );
};
export default IconSection;
