import React from 'react';
import { Link } from 'react-router-dom';

const Page404: React.FC = (props) => {
  return <>
    <h1>Page Not Found</h1>
    <Link to="/">Home</Link>
  </>;
};
export default Page404;
