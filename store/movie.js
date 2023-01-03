export const state = () => ({
    movie: [],
    video: [],
    movieDetail: {},
    action:{}
    
})

export const mutations = {
    setMovie(state, movie) {
        state.movie = movie
    },
    setVideo(state, video) {
        state.video = video
    },
    setMovieDetail(state, movieDetail) {
        state.movieDetail = movieDetail
    },
    setAction(state, action) {
        state.action = action
    }
}

// https://api.themoviedb.org/3/movie/1/images?api_key=&language=en-US
export const actions = {
   async getMovie({commit}) {
        await this.$axios.get(this.$config.api+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate")
            .then((data) => {
                const movie = data.data.results.slice(0,12)
                commit('setMovie', movie)
        })
    }, 
    async video({commit}) {
        await this.$axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=cad050f7e8fec0ce24728541bb999a46")
            .then((data) => {
            // console.log(data)
                const video = data.data.results
                commit('setVideo', video)
        })
    },
    async getOneMovie({ commit }, id) {
        await this.$axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=cad050f7e8fec0ce24728541bb999a46`)
            .then((data) => {
            // console.log(data.data)
                const movieDetails = data.data;
                // console.log(movieDetails)
                commit('setMovieDetail', movieDetails)
        })
    },
    async getAction({ commit }, id) {
        await this.$axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=cad050f7e8fec0ce24728541bb999a46`)
            .then((data) => {
            console.log('action =======>',data);
        })
    }   
}