import Home from '../pages/Home';

export type Routes = {
  path: string
  name: string
  element: React.ReactElement
}

export const routes = [
  {
    path: '/',
    name: 'Home',
    element: <Home />
  }
]

export default routes as Routes[];