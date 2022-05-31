const key = '1b03d974afeb04ac08459ecf83c1e57b'

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestFamily: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=family&page=1&include_adult=false`,
}

export default requests;