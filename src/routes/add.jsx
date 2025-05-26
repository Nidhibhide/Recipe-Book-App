import { createFileRoute } from '@tanstack/react-router'
import AddRecipe from '../pages/AddRecipe'

export const Route = createFileRoute('/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><AddRecipe/></div>
}
