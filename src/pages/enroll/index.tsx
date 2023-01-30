import React from 'react';

interface Props {
  name: string;
}

const Enroll: React.FC<Props> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Enroll;
