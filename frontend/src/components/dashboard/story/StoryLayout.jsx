import React from 'react';
import StoryCard from './StoryCard';
import img1 from '../img/bassi.jpg'
import img2 from '../img/bassi2.jpg'
import img3 from '../img/bassi3.jpg'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const StoryLayout = () => {
//   const [stories, setStories] = useState({
//       bgImage: 'url(https://source.unsplash.com/random?wallpapers)',
//       quotationImage: 'url_to_quotation_image_1.png',
//       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       videoLink: 'url_to_video_1',
//     });

    const stories = [
      {
      bgImage: img1,
      quotationImage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fpv-target-images%2F89f466066a30d28afb5ab6cf4e1dc463b2ba4f923a2e6ad97cccbf35eb855803.jpg&tbnid=itIwagZm9IlJVM&vet=12ahUKEwjpuKuljvCDAxXdRGwGHQtuAk8QMygKegUIARCLAQ..i&imgrefurl=https%3A%2F%2Fwww.primevideo.com%2Fdetail%2FAnubhav-Singh-Bassi---Bas-Kar-Bassi%2F0NAYXIJCTI3GODKFKH72W9ZZ6I&docid=N45YjKfEaVCglM&w=1920&h=1080&q=bassi&client=firefox-b-d&ved=2ahUKEwjpuKuljvCDAxXdRGwGHQtuAk8QMygKegUIARCLAQ',
      text: 'Anubav Bassi',
      videoLink: 'IEfBBYmxtIo?si=dceHQrJShS40ZSMp',
    },
    {
      bgImage: img2,
      quotationImage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fpv-target-images%2F89f466066a30d28afb5ab6cf4e1dc463b2ba4f923a2e6ad97cccbf35eb855803.jpg&tbnid=itIwagZm9IlJVM&vet=12ahUKEwjpuKuljvCDAxXdRGwGHQtuAk8QMygKegUIARCLAQ..i&imgrefurl=https%3A%2F%2Fwww.primevideo.com%2Fdetail%2FAnubhav-Singh-Bassi---Bas-Kar-Bassi%2F0NAYXIJCTI3GODKFKH72W9ZZ6I&docid=N45YjKfEaVCglM&w=1920&h=1080&q=bassi&client=firefox-b-d&ved=2ahUKEwjpuKuljvCDAxXdRGwGHQtuAk8QMygKegUIARCLAQ',
      text: 'Anubav Bassi',
      videoLink: 'qkxuFKqJXWY?si=AFAwU5uuXdmZV8vp',
    },
    {
      bgImage: img3,
      quotationImage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fpv-target-images%2F89f466066a30d28afb5ab6cf4e1dc463b2ba4f923a2e6ad97cccbf35eb855803.jpg&tbnid=itIwagZm9IlJVM&vet=12ahUKEwjpuKuljvCDAxXdRGwGHQtuAk8QMygKegUIARCLAQ..i&imgrefurl=https%3A%2F%2Fwww.primevideo.com%2Fdetail%2FAnubhav-Singh-Bassi---Bas-Kar-Bassi%2F0NAYXIJCTI3GODKFKH72W9ZZ6I&docid=N45YjKfEaVCglM&w=1920&h=1080&q=bassi&client=firefox-b-d&ved=2ahUKEwjpuKuljvCDAxXdRGwGHQtuAk8QMygKegUIARCLAQ',
      text: 'Anubav Bassi',
      videoLink: 'Tqsz6fjvhZM?si=oW9dlADMbuUapaEX',
    },
    {
      bgImage: img1,
      quotationImage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fpv-target-images%2F89f466066a30d28afb5ab6cf4e1dc463b2ba4f923a2e6ad97cccbf35eb855803.jpg&tbnid=itIwagZm9IlJVM&vet=12ahUKEwjpuKuljvCDAxXdRGwGHQtuAk8QMygKegUIARCLAQ..i&imgrefurl=https%3A%2F%2Fwww.primevideo.com%2Fdetail%2FAnubhav-Singh-Bassi---Bas-Kar-Bassi%2F0NAYXIJCTI3GODKFKH72W9ZZ6I&docid=N45YjKfEaVCglM&w=1920&h=1080&q=bassi&client=firefox-b-d&ved=2ahUKEwjpuKuljvCDAxXdRGwGHQtuAk8QMygKegUIARCLAQ',
      text: 'Anubav Bassi',
      videoLink: 'IEfBBYmxtIo?si=dceHQrJShS40ZSMp',
    },
    {
      bgImage: img2,
      quotationImage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fpv-target-images%2F89f466066a30d28afb5ab6cf4e1dc463b2ba4f923a2e6ad97cccbf35eb855803.jpg&tbnid=itIwagZm9IlJVM&vet=12ahUKEwjpuKuljvCDAxXdRGwGHQtuAk8QMygKegUIARCLAQ..i&imgrefurl=https%3A%2F%2Fwww.primevideo.com%2Fdetail%2FAnubhav-Singh-Bassi---Bas-Kar-Bassi%2F0NAYXIJCTI3GODKFKH72W9ZZ6I&docid=N45YjKfEaVCglM&w=1920&h=1080&q=bassi&client=firefox-b-d&ved=2ahUKEwjpuKuljvCDAxXdRGwGHQtuAk8QMygKegUIARCLAQ',
      text: 'Anubav Bassi',
      videoLink: 'qkxuFKqJXWY?si=AFAwU5uuXdmZV8vp',
    },
    {
      bgImage: img3,
      quotationImage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fpv-target-images%2F89f466066a30d28afb5ab6cf4e1dc463b2ba4f923a2e6ad97cccbf35eb855803.jpg&tbnid=itIwagZm9IlJVM&vet=12ahUKEwjpuKuljvCDAxXdRGwGHQtuAk8QMygKegUIARCLAQ..i&imgrefurl=https%3A%2F%2Fwww.primevideo.com%2Fdetail%2FAnubhav-Singh-Bassi---Bas-Kar-Bassi%2F0NAYXIJCTI3GODKFKH72W9ZZ6I&docid=N45YjKfEaVCglM&w=1920&h=1080&q=bassi&client=firefox-b-d&ved=2ahUKEwjpuKuljvCDAxXdRGwGHQtuAk8QMygKegUIARCLAQ',
      text: 'Anubav Bassi',
      videoLink: 'Tqsz6fjvhZM?si=oW9dlADMbuUapaEX',
    }
  ]
  

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",         
        background: "green",  
        color: 'blue',
        fontSize: '20px',  
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
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  
  return (
    // <div> style={{ display: 'flex', justifyContent:'start', alignItems: 'center' }}>
    <div>
    <Slider {...settings}>
      {stories.map((story)=>(
      <StoryCard key={story.id} stories={story} />
      ))}
      </Slider>
    </div>
  );
};

export default StoryLayout;
