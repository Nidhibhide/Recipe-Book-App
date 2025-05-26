import * as React from 'react'
import { createRootRoute } from '@tanstack/react-router'
import App from '../App'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <div><App/></div>
    </React.Fragment>
  )
}
