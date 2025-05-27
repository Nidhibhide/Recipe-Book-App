import { createFileRoute } from '@tanstack/react-router'
import RecipeDetails from '../pages/RecipeDetails'

export const Route = createFileRoute('/recipe/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><RecipeDetails/></div>
}
