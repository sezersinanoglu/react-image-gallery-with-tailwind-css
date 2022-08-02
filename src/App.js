import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import ImageSearch from './components/ImageSearch'

function App() {
  //set Attribute components value
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    /*https://pixabay.com/api/?key=${keyValue}&q=${termValue}&image_type=photo&pretty=true*/
    /* fetch api */
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">
      {/* Images Search Components*/}
      <ImageSearch searchText={(text) => setTerm(text)} />

      {/* If Images Search found = 0 then h1 tags return*/}
      {!isLoading && images.length === 0 && <h1 className='text-5xl text-center text-gray-600 mx-auto mt-32'>No Images Found</h1>}
      
      {/* Images Card Components loading and Card Components*/}
      {isLoading ? <h1 className='text-6xl text-center mx-auto mt-32'>Loading...</h1> : <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {images.map((image, index) => {
          return <Card key={index} image={image} />
        })}
      </div>}
    </div>
  );
}

export default App;
