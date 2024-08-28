import { TSearchParams } from '@/types/search-params';

export default interface IRouteUrl {
  params: { slug: string[] };
  searchParams: TSearchParams;
}
