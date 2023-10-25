import { useNavigation } from '@remix-run/react'

export function GlobalLoading() {
  const navigation = useNavigation()

  if (navigation.state === 'idle') return null

  return (
    <div className="fixed inset-x-0 top-0 h-16 z-50 before:bg-gradient-to-r before:from-sky-500 before:rounded-full before:to-indigo-500 before:h-[2px] before:absolute before:w-[40%] before:animate-loading-running sm:before:animate-loading-running-slow"></div>
  )
}
