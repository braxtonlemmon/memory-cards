import React, { useState, useEffect } from 'react'
import Card from './Card';
import { graphql, useStaticQuery } from 'gatsby';

interface CardsProps {

}

const Cards: React.FC<CardsProps> = ({}) => {
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const data = useStaticQuery(graphql`
    query Images {
      allPicsum {
        edges {
          node {
            imageUrl
          }
        }
      }
    }
  `);
  
  useEffect(() => {
    const urls = data.allPicsum.edges.map((image: any) => image.node.imageUrl);
    setImages(urls);
    setLoading(false);
  }, []);

  

  // useEffect(() => {
  //   fetch('https://picsum.photos/v2/list?page=4')
  //   .then(res => res.json())
  //   .then(data => {
  //     const imageUrls = data.map((image: { download_url: string}) => image.download_url);
  //     setImages(imageUrls);
  //     setLoading(false);
  //   })
  // }, [])
  
  return (
    <div>
      {
        isLoading &&
        <p>Loading...</p>
      }
      {
        !isLoading &&
        images.map(url => (
          <Card url={url} />
        ))
      }
    </div>
  );
}

export default Cards;