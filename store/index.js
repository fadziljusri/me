export const state = () => ({
    path: '/',
    showNavBrand: false
})

export const mutations = {
    SET_PATH(state, path) {
        state.showNavBrand = path !== '/';
        state.path = path;
    }
}