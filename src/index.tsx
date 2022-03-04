import React from 'react';
import ReactDOM from 'react-dom';

import { createServer, Model } from 'miragejs';

import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Web developer freelancer',
          type: 'deposit',
          category: 'Develop',
          amount: 21000,
          createdAt: new Date('2022-03-03 09:00:00'),
        },

        {
          id: 2,
          title: 'Rent',
          type: 'withdraw',
          category: 'Home',
          amount: 1100,
          createdAt: new Date('2022-03-02 11:00:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
