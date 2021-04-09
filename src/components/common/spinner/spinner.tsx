import { FC } from 'react';

const Spinner: FC = () => (
  <div className="d-flex justify-content-center">
    <div className="spinner-grow text-warning" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export { Spinner };
