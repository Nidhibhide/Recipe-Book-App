import { createFileRoute } from '@tanstack/react-router'
import RecipeList from '../pages/RecipeList'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><RecipeList/></div>
}
