import React, { FC, useState, useEffect, useRef } from 'react';
import styles from './Dropdown.module.css';
import Items from '../Items/Items';

type Props = {
  items: any;
  className?: any;
  handleChange: any;
  value: any;
  onHover: any;
};

const Drowdown: FC<Props> = ({
  items,
  className,
  handleChange,
  value,
  onHover,
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSwitch = () => {
    setOpen(!open);
  };

  const selected = (item: any) => {
    handleChange(item);
    setOpen(false);
  };

  const handleClickOutside = (event: any) => {
    if (!dropdownRef?.current?.contains(event.target)) {
      setOpen(false);
    }
    // setOpen(false);
  };

  useEffect(() => {
    if (open) {
      if (dropdownRef.current) {
        console.log('You clicked inside of me!');
      }
      document?.addEventListener('click', handleClickOutside, true);
    }
    return () => {
      console.log('triggered');
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [open]);

  return (
    <div
      className={[className, styles.drop_container_main].join(' ')}
      ref={dropdownRef}
    >
      <div
        className={styles.dropdown}
        onClick={() => !onHover && handleSwitch()}
        onMouseEnter={() => onHover && handleSwitch()}
        // onMouseOut={() => onHover && handleSwitch()}
      >
        <span>{value}</span>
        <span>
          <svg width='20' height='20' viewBox='0 0 20 20'>
            <path
              d='M10 15L6 11M10 15L14 11'
              stroke='black'
              stroke-width='2'
              stroke-linecap='round'
            />
          </svg>
        </span>
      </div>
      <div className={styles.itemContainer}>
        {open ? (
          <Items
            data={{ label: 'name', items: items }}
            itemWidth={'300px'}
            handleChange={selected}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Drowdown;
