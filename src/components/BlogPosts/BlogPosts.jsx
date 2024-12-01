import React from 'react';
import './BlogPosts.css';  // Optional for custom styles

const BlogPost = ({ link, imageUrl, title, date, readTime }) => (
  <a href={link}>
    <li className="post wow fadeInUp all">
      <div className="image bg" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="details">
        <h5>{title}</h5>
        <p>
          <i className="fa fa-calendar" style={{ marginRight: '6px' }}></i>
          {date}
          <span style={{ margin: '0 6px' }}>|</span>
          <i className="fa fa-clock-o" style={{ marginRight: '6px' }}></i>
          {readTime} min read
        </p>
      </div>
      <div className="clear"></div>
    </li>
  </a>
);

const BlogPosts = () => {
  const posts = [
    {
      link: 'https://labs.com/labs-edit/alcohol-free-christmas-5-events-to-attend-this-season-that-wont-leave-you-with-a-hangover/',
      imageUrl: 'https://wp-labs-wordpress-content-prod.s3.eu-west-2.amazonaws.com/wp-content/uploads/2024/11/20121325/LABS_CP0180.jpg',
      title: 'Alcohol free Christmas: 5 events to attend this season that won’t leave you with a hangover!',
      date: '20th November 2024',
      readTime: 3,
    },
    {
      link: 'https://labs.com/labs-edit/voices-of-labs-matilda-pepper/',
      imageUrl: 'https://s3.eu-west-2.amazonaws.com/wp-media.labs.com/wp-content/uploads/2024/07/30163302/Voices-of-LABS-Matilda-Pepper-1.png',
      title: 'Voices of LABS – Matilda Pepper',
      date: '30th July 2024',
      readTime: 2,
    },
    {
      link: 'https://labs.com/labs-edit/the-sound-of-success/',
      imageUrl: 'https://s3.eu-west-2.amazonaws.com/wp-media.labs.com/wp-content/uploads/2023/01/31071756/LABS_March-21_4th-Floor_23-2-1920x1200-1.jpg',
      title: 'The sound of success – why great acoustics are essential to create the perfect working environment',
      date: '3rd April 2024',
      readTime: 2,
    },
    // Add more posts as needed
  ];

  return (
    <div className="container">
      <ul className="posts" id="blog-posts">
        {posts.map((post, index) => (
          <BlogPost
            key={index}
            link={post.link}
            imageUrl={post.imageUrl}
            title={post.title}
            date={post.date}
            readTime={post.readTime}
          />
        ))}
      </ul>
    </div>
  );
};

export default BlogPosts;
