export const state = () => ({})

export const mutations = {}

export const actions = {
  async  login({ commit }, data) {
       await this.$axios.post("https://reqres.in/api/login", data)
        .then((data) => {
            // console.log('data ----------> ',data.data.token)
            const token = data.data.token;
            this.$cookies.set('token', token);
            this.$router.push("/")
        })
    }
}