interface Props {
  name: string
  defaultValue: HTMLInputElement['defaultValue']
  placeholder: string
  label: string
}

export function InputText({ defaultValue, name, placeholder, label }: Props) {
  return <>
    <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
      {label}
    </label>
    <div className="relative rounded-md shadow-sm">
      <input
        type="text"
        name={name}
        id={name}
        defaultValue={defaultValue}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder={placeholder}
      />
    </div></>
}