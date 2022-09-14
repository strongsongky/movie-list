import Movie from './components/Movie'
import React, { useState, useEffect } from 'react'
import request from './utils/axiosClient'
import { requestUrl } from './config'
import httpStatusErrorHandler from './utils/errorHandler'

const App = () => {
  const [movies, setMovies] = React.useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { REACT_APP_API_KEY } = process.env

  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_API_KEY}`
  //   )
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       console.log("data", data);
  //       setMovies(data.results);
  //     });
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_API_KEY}`
  //     )
  //     .then(function (res) {
  //       if (res.status === 200) {
  //         setMovies(res.data.results);
  //       }
  //     });
  // }, []);

  // const getMovies = async () => {
  //   const res = await axios.get(
  //     `https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_API_KEY}`,
  //   )

  //   if (res.status === 200) {
  //     setMovies(res.data.results)
  //   }
  // }

  const { popularMovies } = requestUrl

  const url = `${popularMovies}?api_key=${REACT_APP_API_KEY}`

  const getMovies = async (url) => {
    try {
      setIsLoading(true)
      const res = await request({ url })

      // const test = "I'm not error"
      // throw test

      // const secondData = await request({ res })
      // const thirdData = await request({ secondData })
      if (res.status === 200) {
        setMovies(res.data.results)
        setIsLoading(false)
      }
    } catch (error) {
      const { status } = error.response
      httpStatusErrorHandler(status)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getMovies(url)
  }, [])

  return (
    <div>
      <div className="appContainer">
        {isLoading && <h1>로딩중입니다 !</h1>}
        {movies.map((data) => {
          return (
            <Movie
              title={data.title}
              poster_path={data.poster_path}
              release_date={data.release_date}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
