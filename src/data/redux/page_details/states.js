const initialStates = {
    page_details: {
        lang: 'en',
        device_data: null,
        current_page: null,
        user_logged_in: false,
        home_page_data: null,
        loaders: {
            homepage_loading: false,
            homepage_loaded: false,
            homepage_load_err: false
        }
    },
};

export default initialStates;
