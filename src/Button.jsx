import React from 'react';

function Button({ v, onClick }) {
  return (
    <button onClick={onClick}>
      {v}
    </button>
  );
}

export default Button;
