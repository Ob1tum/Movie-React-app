import React from 'react';

import './app.scss';

import ErrorMessage from '../error-message/error-message';
import Search from '../search/search';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import RatedMovies from '../rated-movies/rated-movies';

const App = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Search',
      children: <Search />,
    },
    {
      key: '2',
      label: 'Rated',
      children: <RatedMovies />,
    },
  ];

  return (
    <div className="app">
      <ErrorMessage />
      <Tabs defaultActiveKey="1" items={items} centered={true} />
    </div>
  );
};

export default App;
