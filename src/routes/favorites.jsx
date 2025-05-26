import { createFileRoute } from '@tanstack/react-router'
import FavouriteList from '../pages/FavouriteList'

export const Route = createFileRoute('/favorites')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><FavouriteList/></div>
}
