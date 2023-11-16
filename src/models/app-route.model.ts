// https://nextjs.org/docs/app/api-reference/file-conventions/page
export interface AppRouteProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
