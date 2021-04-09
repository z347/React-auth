import { FC } from 'react';

import './error-indicator.css';

const ErrorIndicator: FC = () => (
  <div className="error-indicator">
    <span className="boom">ERROR!</span>
    <span>something has gone terribly wrong</span>
    <span>(but we already sent droids to fix it)</span>
  </div>
);

export { ErrorIndicator };
