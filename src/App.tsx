import React, { useState, useEffect } from 'react';
import Drowdown from './Dropdown/Drowdown';
const App = () => {
  const [select, setSelect] = useState('Select...');
  const [items, setItems] = useState([
    {
      label: 'Parent 1',
    },
    {
      label: 'Parent 2',
      items: [
        {
          label: '1 Child of 1',
          items: [
            {
              label: '1 Child of 1',
            },
            {
              label: '2 Child of 1',
            },
            {
              label: '3 Child of 1',
            },
          ],
        },
        {
          label: '2 Child of 1',
        },
        {
          label: '3 Child of 1',
          items: [
            {
              label: '1 Child of 1',
            },
            {
              label: '2 Child of 1',
            },
            {
              label: '3 Child of 1',
            },
          ],
        },
      ],
    },
    {
      label: 'Parent 3',
      items: [
        {
          label: '1 Child of 1',
        },
        {
          label: '2 Child of 1',
          items: [
            {
              label: '1 Child of 1',
            },
            {
              label: '2 Child of 1',
            },
            {
              label: '3 Child of 1',
            },
          ],
        },
        {
          label: '3 Child of 1',
        },
      ],
    },
    {
      label: 'Parent 4',
    },
  ]);

  return (
    <div>
      <Drowdown
        items={items}
        value={select}
        handleChange={(item: any) => setSelect(item.label)}
        onHover={false}
      />
    </div>
  );
};

export default App;
