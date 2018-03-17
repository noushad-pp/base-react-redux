import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

require('./favicon.ico');
import Root from './root_container';
import configureStore, { history } from './data/store/configureStore';
const store = configureStore({});

render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./root_container', () => {
        const NewRoot = require('./root_container').default;
        render(
            <AppContainer>
                <NewRoot store={store} history={history} />
            </AppContainer>,
            document.getElementById('app')
        );
    });
}
