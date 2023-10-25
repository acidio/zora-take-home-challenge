import { Link } from "@remix-run/react"

type Photo = {
  id: string
  urls: {
    thumb: string,
  },
  links: {
    download: string
  }
}

interface Props {
  photos: Photo[]
}

export function ImageGrid({ photos }: Props) {
  return <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
    {photos?.map((photo) => (
      <li key={photo.id} className="relative">
        <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
          <img src={photo.urls.thumb} alt="" className="pointer-events-none object-cover w-full group-hover:opacity-75 aspect-square" />
          <Link to={photo.links.download} target="_blank" className="absolute inset-0 focus:outline-none">
            <span className="sr-only">Download the photo</span>
          </Link>
        </div>
      </li>
    ))}
  </ul>
}