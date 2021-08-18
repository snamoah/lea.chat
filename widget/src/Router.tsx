import { h, createContext, ComponentType, ComponentChild, VNode } from 'preact'
import { useState } from 'preact/hooks'

const initialRoute = '/'

export interface RouteContext {
  route: string
  setRoute(route: string): void
}

export const RouterContext = createContext<RouteContext>({
  route: initialRoute,
  setRoute: (_) => undefined,
})

interface RouterProps {
  children: VNode | VNode<{ path: string }>[]
}

export const Router = ({ children }: RouterProps) => {
  const [route, setRoute] = useState(initialRoute)

  return (
    <RouterContext.Provider value={{ route, setRoute }}>
      {Array.isArray(children)
        ? children.find((child) => child?.props.path === route)
        : children}
    </RouterContext.Provider>
  )
}

interface RouteProps {
  component: ComponentType<{ path: string }>
  path: string
}

export const Route = ({ component: RouteComponent, ...rest }: RouteProps) => (
  <RouteComponent {...rest} />
)
