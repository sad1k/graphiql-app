import { TMethod } from '@/utils/restclient/method-type';
import { THeaders } from './headers';

export interface IRestClientInputs {
  method: TMethod;
  url: string;
  headers: THeaders;
  body: string;
}

export interface IRestClientForm extends IRestClientInputs {
  setResponse: (response: string) => void;
  setStatus: (status: number) => void;
}
