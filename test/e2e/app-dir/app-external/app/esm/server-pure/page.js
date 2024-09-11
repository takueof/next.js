import { Suspense, lazy } from 'react'

// eslint-disable-next-line no-sequences
const Client = lazy(() => import('./client').then((v) => (console.log(v), v)))
console.trace(Client)

export default function Index() {
  return (
    <Suspense>
      <Client />
    </Suspense>
  )
}
