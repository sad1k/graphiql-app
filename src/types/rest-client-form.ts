import { TMethod } from '@/utils/restclient/method-type';
import { THeaders } from './headers';

export interface IRestClientForm {
  method: TMethod;
  url: string;
  headers: THeaders;
}
