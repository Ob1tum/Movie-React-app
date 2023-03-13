import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectError } from '../../store/reducers/error-reducer';

import { Alert } from 'antd';

import './error-message.scss';

const ErrorMessage = () => {
  const { active, description, text } = useAppSelector(selectError).error;

  if (!active) {
    return null;
  }

  return (
    <div className={'error-message'}>
      <Alert message={text} type="error" description={description} />
    </div>
  );
};

export default ErrorMessage;
