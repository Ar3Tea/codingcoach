import React from 'react';
import Popup from 'reactjs-popup'

const Featured = props => {

      return (
        <div className="bg-blue-400">
          <h1 className="py-8 text-center font-mono text-4xl italic">Featured Movies</h1>
          <div className="flex flex-wrap items-center pb-8">
            {props.featuredMovies.slice(0, 6).map(movie => 
            <div className="w-full xs:w-full sm:w-full md:w-1/2 lg:w-1/6 xl:w-1/6 mb-4 text-center border-solid border-4 border-gray-400 pt-6 pb-5 m-0 sm:m-2 md:m-0 lg:m-0 xl:m-0" key={movie.id}>
              <div className="font-semibold">{movie.title}</div>
              <div className="flex justify-center">
                <img src="https://via.placeholder.com/150" alt="placeholder" />
              </div>
              <div>{movie.description.slice(0, 50)}...</div>
            <Popup
              trigger={<button className="read-more"> Read More </button>}
              modal
              closeOnDocumentClick
            >
              <div className="bg-gray-500">
              <div><span className="font-bold">Title:</span> <span className="italic">{movie.title}</span> </div>
              <div className="flex justify-center"> <img src="https://via.placeholder.com/150" alt="placeholder" /> </div>
              <div><span className="font-bold">Description:</span> <span className="italic">{movie.description}</span> </div>
              <div><span className="font-bold">Director:</span> <span className="italic">{movie.director}</span> </div>
              <div><span className="font-bold">Producer:</span> <span className="italic">{movie.producer}</span> </div>
              <div><span className="font-bold">Release Date:</span> <span className="italic">{movie.release_date}</span> </div>
              <div><span className="font-bold">Score:</span> <span className="italic">{movie.rt_score}</span> </div>
              </div>
            </Popup>
          </div>
          )}
          </div>
        </div>
      );
  }

  export default Featured;