import React from 'react'

export default function Movie({ title, poster_path, release_date }) {
  return (
    <div className="movieContainer">
      <img
        src={`https://image.tmdb.org/t/p/w1280/${poster_path}`}
        alt="포스터"
      />
      <div className="movieDetail">
        <p >{title}</p>
        <p>{release_date}</p>
      </div>
    </div>
  )
}
