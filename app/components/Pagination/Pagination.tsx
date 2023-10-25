import { Link } from "@remix-run/react"

interface Props {
  previousPageUrl?: string
  nextPageUrl?: string
}

export function Pagination({ previousPageUrl, nextPageUrl }: Props) {
  return <nav className="flex items-center justify-center border-t border-gray-200 px-4 sm:px-0 space-x-4">
    {previousPageUrl && <Link
      to={previousPageUrl}
      className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
    >
      Previous
    </Link>}
    {nextPageUrl && <Link
      to={nextPageUrl}
      className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
    >
      Next
    </Link>}
  </nav>
}