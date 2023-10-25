import { json, LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { Form, Link, useLoaderData, useNavigation, useSearchParams } from "@remix-run/react";
import { type ColorId, type SearchOrderBy, createApi } from "unsplash-js";

import { EmptyState, ImageGrid, InputText, Pagination, Select } from "~/components";

export const meta: MetaFunction = () => {
  return [
    { title: "Zora - Take home challenge" },
  ];
};

const POSSIBLE_COLORS: ColorId[] = [
  'black_and_white', 'black', 'white', 'yellow', 'orange', 'red', 'purple', 'magenta', 'green', 'teal', 'blue'
]

const POSSIBLE_ORDER_BY: SearchOrderBy[] = ['latest', 'relevant', 'editorial']

export const loader = async ({ request }: LoaderFunctionArgs) => {
  if (!process.env.UNSPLASH_ACCESS_KEY) {
    throw ('You need to configure the Unsplash access key in the .env')
  }

  const searchParams = new URL(request.url).searchParams
  const query = searchParams.get('query') || ''
  const color = searchParams.get('color') as ColorId || undefined
  const orderBy = searchParams.get('orderBy') as SearchOrderBy || undefined
  const page = Number(searchParams.get('page')) || 1

  const serverApi = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY,
  });

  const photos = await serverApi.search.getPhotos({
    query,
    color,
    orderBy,
    perPage: 12,
    page
  })

  return json({
    ...photos.response,
  })
}

export default function Index() {
  const { results, total_pages } = useLoaderData<typeof loader>()
  const [searchParams] = useSearchParams()
  const navigation = useNavigation()
  const currentPage = Number(searchParams.get('page')) || 1

  const photos = results || []
  const hasResults = photos.length > 0
  const isLoading = navigation.state === 'loading'

  const searchParamsWithoutPage = new URLSearchParams(searchParams)
  searchParamsWithoutPage.delete('page')

  const hasNextPage = total_pages && currentPage < total_pages
  const hasPreviousPage = currentPage > 1
  const nextPageUrl = hasNextPage ? `/?${searchParamsWithoutPage.toString()}&page=${currentPage + 1}` : undefined
  const previousPageUrl = hasPreviousPage ? `/?${searchParamsWithoutPage.toString()}&page=${currentPage - 1}` : undefined

  return (
    <div className="max-w-5xl m-auto p-6 flex flex-col space-y-6">
      <Form method="GET" className="grid grid-cols-4 sm:grid-cols-12 gap-x-4 gap-y-4">
        <div className="col-span-full sm:col-span-4">
          <InputText
            label="Search"
            name="query"
            defaultValue={searchParams.get('query') ?? ''}
            placeholder="Search term..."
          />
        </div>
        <div className="col-span-2 sm:col-span-3">
          <Select
            name="color"
            label="Color"
            defaultValue={searchParams.get('color') || ''}
          >
            <option value=''>Any</option>
            {POSSIBLE_COLORS.map(color => <option key={color} value={color}>{color}</option>)}
          </Select>
        </div>
        <div className="col-span-2 sm:col-span-3">
          <Select
            name="orderBy"
            label="Sort by"
            defaultValue={searchParams.get('orderBy') || 'relevant'}
          >
            {POSSIBLE_ORDER_BY.map(order => <option key={order} value={order}>{order}</option>)}
          </Select>
        </div>
        <div className="col-span-full sm:col-span-2 flex items-end">
          <button type="submit" disabled={isLoading} className="rounded-md bg-indigo-600 w-full px-2.5 py-1.5 sm:leading-6 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            {isLoading ? 'Loading...' : 'Search'}
          </button>
        </div>
      </Form>

      {hasResults ? <ImageGrid photos={photos} /> : <EmptyState />}

      <Pagination previousPageUrl={previousPageUrl} nextPageUrl={nextPageUrl} />
    </div>
  );
}