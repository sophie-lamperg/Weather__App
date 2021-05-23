import React, { useState } from 'react';
import Select, { components } from 'react-select';

const Control = ({ children, ...props }) => {
  const { emoji, onEmojiClick } = props.selectProps;
  const style = { cursor: 'pointer' };

  return (
    <components.Control {...props}>
      <span onMouseDown={onEmojiClick} style={style}>
        {emoji}
      </span>
      {children}
    </components.Control>
  );
};

const CustomSelectProps = props => {
  const [clickCount, setClickCount] = useState(0);

  const onClick = e => {
    setClickCount(clickCount + 1);
    e.preventDefault();
    e.stopPropagation();
  };

  const styles = {
    control: css => ({ ...css, paddingLeft: '1rem' }),
  };

  return (
    <Select
      {...props}
      onEmojiClick={onClick}
      components={{ Control }}
      isSearchable
      name="emoji"
      // options={colourOptions}
      styles={styles}
    />
  );
};

export default CustomSelectProps;