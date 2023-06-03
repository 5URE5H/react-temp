import * as React from 'react';
import { Poll } from './components/Poll';
import './style.css';

export const data = {
  question: 'Is this the best poll or what?',
  options: [
    {
      id: 1,
      label: 'yes',
      votes: [],
    },
    {
      id: 2,
      label: 'no',
      votes: [
        {
          id: 1,
          title: 'accusamus beatae',
          url: 'https://via.placeholder.com/600/92c952',
          thumbnailUrl: 'https://via.placeholder.com/150/92c952',
        },
        {
          id: 2,
          title: 'reprehenderit deserunt',
          url: 'https://via.placeholder.com/600/771796',
          thumbnailUrl: 'https://via.placeholder.com/150/771796',
        },
      ],
    },
    {
      id: 3,
      label: 'maybe',
      votes: [
        {
          id: 3,
          title: 'officia porro modi',
          url: 'https://via.placeholder.com/600/24f355',
          thumbnailUrl: 'https://via.placeholder.com/150/24f355',
        },
      ],
    },
  ],
};

const currentUserId = {
  id: 101,
  title: 'officia porro modi',
  url: 'https://via.placeholder.com/600/56a8c2',
  thumbnailUrl: 'https://via.placeholder.com/150/56a8c2',
};

export default function App() {
  const [pollingData, setPollingData] = React.useState(data);
  const [userId, setUserId] = React.useState(currentUserId);

  return (
    <div>
      <Poll user={userId} data={pollingData} setData={setPollingData} />
    </div>
  );
}
