import { ReactNode } from "react"

interface Props {
  name: string
  defaultValue: HTMLInputElement['defaultValue']
  label: string
  children: ReactNode
}

export function Select({ defaultValue, name, label, children }: Props) {
  return <>
    <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
      {label}
    </label>
    <select
      id={name}
      name={name}
      className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
      defaultValue={defaultValue}
    >
      {children}
    </select>
  </>
}