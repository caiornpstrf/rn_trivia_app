import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import Store from '_store';

const store = new Store();

const RenderWithProviders = ({children}) => {
  return <Provider store={store.buildStore()}>{children}</Provider>;
};

const customRender = (ui, options) => {
  store.initialState = options.initialState;
  return render(ui, {wrapper: RenderWithProviders, ...options});
};

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
