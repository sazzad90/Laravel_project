import React from "react";
import "./StoryCard.css";
import ThemeContext from "../../../context/themeContext/ThemeContext ";
import { useContext } from "react";
const StoryCard = (props) => {
  const { bgImage, quotationImage, text, videoLink } = props.stories;

  const themeContext = React.useContext(ThemeContext);
  const {theme, themeStyles} = themeContext;
  const { background, navColor,logoColor,buttonColor,textColor} = themeStyles[theme]

  console.log("text: ", text);
  console.log("link: ", videoLink);
  return (
    <div style={{ 
    borderRadius: "10px",          
    width: "350px",
    height: "430px",
    borderColor: "black",
    margin: "8px",
  }}
    >
      <div
        className="story-card"
        style={{
            backgroundImage: `url(${bgImage})`,
            borderRadius: "10px",
            backgroundSize: "cover",
            width: "100%",
            height: "85%",
        }}
      >
          {/* <img
            className="quotation-image absolute top-2 left-2 custom-quotation-image"
            src={quotationImage}
            alt="quotation"
          /> */}
          <div className="video-responsive" style={{  position: "relative", marginLeft: '20px', width: "90%", height: '20%'}}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoLink}`}
              title="YouTube video player"
              frameborder="20px"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen="true"
              style={{borderRadius: '30px', marginTop: '80%'}}
            ></iframe>
          </div>
      </div>
      <div
          className="text"
          style={{ backgroundColor: 'light-grey', color: textColor ,borderRadius: "10px",
        }}
        >
          <p style={{ textAlign: "center", fontFamily: 'monospace', fontSize: '20px', fontWeight:'bold' }}>{text}</p>
        </div>
    </div>
  );
};

export default StoryCard;
