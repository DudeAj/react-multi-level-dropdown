import React, { FC, useState } from 'react';
import styles from './Items.module.css';

type Props = {
  itemWidth?: any;
  data: {
    label: any;
    items?: any;
  };
  handleChange: any;
};
const Items: FC<Props> = ({ itemWidth, data, handleChange }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  return data.items.map((item: any, index: number) => {
    return (
      <React.Fragment key={item.label}>
        {item?.items ? (
          <ul
            className={styles.itemContainer}
            onMouseLeave={() => setActiveIndex(-1)}
          >
            <li
              className={styles.item}
              style={{ width: itemWidth }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <span>{item.label}</span>
              <span>
                <svg width='20' height='20' viewBox='0 0 20 20'>
                  <path
                    d='M15 10L11 6M15 10L11 14'
                    stroke='black'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                </svg>
              </span>
            </li>
            {activeIndex === index ? (
              <div className={styles.inner}>
                <Items
                  data={item}
                  itemWidth={itemWidth}
                  handleChange={handleChange}
                />
              </div>
            ) : null}
          </ul>
        ) : (
          <li
            className={styles.item}
            style={{ width: itemWidth }}
            onClick={() => handleChange(item)}
          >
            {item.label}
          </li>
        )}
      </React.Fragment>
    );
  });
};

export default Items;
