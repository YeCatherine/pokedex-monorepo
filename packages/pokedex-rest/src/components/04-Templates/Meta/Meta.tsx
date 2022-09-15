import { Helmet } from 'react-helmet';

type Props = {
  title: string,
};
const Meta = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default Meta;
