export default interface IRouteUrl {
  params: { slug: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
}
