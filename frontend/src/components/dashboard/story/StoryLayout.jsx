import React from "react";
import StoryCard from "./StoryCard";
import img1 from "../img/bassi.jpg";
import img2 from "../img/bassi2.jpg";
import img3 from "../img/bassi3.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StoryLayout = () => {
  const stories = [
    {
      bgImage: img1,
      quotationImage:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fpv-target-images%2F89f466066a30d28afb5ab6cf4e1dc463b2ba4f923a2e6ad97cccbf35eb855803.jpg&tbnid=itIwagZm9IlJVM&vet=12ahUKEwjpuKuljvCDAxXdRGwGHQtuAk8QMygKegUIARCLAQ..i&imgrefurl=https%3A%2F%2Fwww.primevideo.com%2Fdetail%2FAnubhav-Singh-Bassi---Bas-Kar-Bassi%2F0NAYXIJCTI3GODKFKH72W9ZZ6I&docid=N45YjKfEaVCglM&w=1920&h=1080&q=bassi&client=firefox-b-d&ved=2ahUKEwjpuKuljvCDAxXdRGwGHQtuAk8QMygKegUIARCLAQ",
      text: "Anubav Bassi",
      videoLink: "IEfBBYmxtIo?si=dceHQrJShS40ZSMp",
    },
    {
      bgImage: img2,
      quotationImage:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fpv-target-images%2F89f466066a30d28afb5ab6cf4e1dc463b2ba4f923a2e6ad97cccbf35eb855803.jpg&tbnid=itIwagZm9IlJVM&vet=12ahUKEwjpuKuljvCDAxXdRGwGHQtuAk8QMygKegUIARCLAQ..i&imgrefurl=https%3A%2F%2Fwww.primevideo.com%2Fdetail%2FAnubhav-Singh-Bassi---Bas-Kar-Bassi%2F0NAYXIJCTI3GODKFKH72W9ZZ6I&docid=N45YjKfEaVCglM&w=1920&h=1080&q=bassi&client=firefox-b-d&ved=2ahUKEwjpuKuljvCDAxXdRGwGHQtuAk8QMygKegUIARCLAQ",
      text: "Anubav Bassi",
      videoLink: "qkxuFKqJXWY?si=AFAwU5uuXdmZV8vp",
    },
    {
      bgImage: img3,
      quotationImage:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fpv-target-images%2F89f466066a30d28afb5ab6cf4e1dc463b2ba4f923a2e6ad97cccbf35eb855803.jpg&tbnid=itIwagZm9IlJVM&vet=12ahUKEwjpuKuljvCDAxXdRGwGHQtuAk8QMygKegUIARCLAQ..i&imgrefurl=https%3A%2F%2Fwww.primevideo.com%2Fdetail%2FAnubhav-Singh-Bassi---Bas-Kar-Bassi%2F0NAYXIJCTI3GODKFKH72W9ZZ6I&docid=N45YjKfEaVCglM&w=1920&h=1080&q=bassi&client=firefox-b-d&ved=2ahUKEwjpuKuljvCDAxXdRGwGHQtuAk8QMygKegUIARCLAQ",
      text: "Anubav Bassi",
      videoLink: "Tqsz6fjvhZM?si=oW9dlADMbuUapaEX",
    },
    {
      bgImage: img1,
      quotationImage:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fpv-target-images%2F89f466066a30d28afb5ab6cf4e1dc463b2ba4f923a2e6ad97cccbf35eb855803.jpg&tbnid=itIwagZm9IlJVM&vet=12ahUKEwjpuKuljvCDAxXdRGwGHQtuAk8QMygKegUIARCLAQ..i&imgrefurl=https%3A%2F%2Fwww.primevideo.com%2Fdetail%2FAnubhav-Singh-Bassi---Bas-Kar-Bassi%2F0NAYXIJCTI3GODKFKH72W9ZZ6I&docid=N45YjKfEaVCglM&w=1920&h=1080&q=bassi&client=firefox-b-d&ved=2ahUKEwjpuKuljvCDAxXdRGwGHQtuAk8QMygKegUIARCLAQ",
      text: "Anubav Bassi",
      videoLink: "IEfBBYmxtIo?si=dceHQrJShS40ZSMp",
    },
    {
      bgImage: img2,
      quotationImage:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fpv-target-images%2F89f466066a30d28afb5ab6cf4e1dc463b2ba4f923a2e6ad97cccbf35eb855803.jpg&tbnid=itIwagZm9IlJVM&vet=12ahUKEwjpuKuljvCDAxXdRGwGHQtuAk8QMygKegUIARCLAQ..i&imgrefurl=https%3A%2F%2Fwww.primevideo.com%2Fdetail%2FAnubhav-Singh-Bassi---Bas-Kar-Bassi%2F0NAYXIJCTI3GODKFKH72W9ZZ6I&docid=N45YjKfEaVCglM&w=1920&h=1080&q=bassi&client=firefox-b-d&ved=2ahUKEwjpuKuljvCDAxXdRGwGHQtuAk8QMygKegUIARCLAQ",
      text: "Anubav Bassi",
      videoLink: "qkxuFKqJXWY?si=AFAwU5uuXdmZV8vp",
    },
    {
      bgImage: img3,
      quotationImage:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fpv-target-images%2F89f466066a30d28afb5ab6cf4e1dc463b2ba4f923a2e6ad97cccbf35eb855803.jpg&tbnid=itIwagZm9IlJVM&vet=12ahUKEwjpuKuljvCDAxXdRGwGHQtuAk8QMygKegUIARCLAQ..i&imgrefurl=https%3A%2F%2Fwww.primevideo.com%2Fdetail%2FAnubhav-Singh-Bassi---Bas-Kar-Bassi%2F0NAYXIJCTI3GODKFKH72W9ZZ6I&docid=N45YjKfEaVCglM&w=1920&h=1080&q=bassi&client=firefox-b-d&ved=2ahUKEwjpuKuljvCDAxXdRGwGHQtuAk8QMygKegUIARCLAQ",
      text: "Anubav Bassi",
      videoLink: "Tqsz6fjvhZM?si=oW9dlADMbuUapaEX",
    },
  ];

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "grey",
          color: "black",
          boxSizing: "40vh",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ 
          ...style, 
          display: "block",      
          background: "grey",
          color: "black", 
        }}
          onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Adjust settings for screens less than 1024px wide
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Adjust settings for screens less than 768px wide
        settings: {
          slidesToShow: 1,
        },
      },
    ],

  };

  return (
    <div style={{
      width: '195vh',
      height: '40vh',
      margin: 'auto',
    }
    }>
      <Slider {...settings}>
        {stories.map((story) => (
          <StoryCard key={story.id} stories={story} />
        ))}
      </Slider>
    </div>
  );
};

export default StoryLayout;
