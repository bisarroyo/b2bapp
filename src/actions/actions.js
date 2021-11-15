/* eslint-disable import/prefer-default-export */
import { USER } from '../types/types';

export const users = () => ({
  type: USER,
  payload: { data: 'test' },
});

