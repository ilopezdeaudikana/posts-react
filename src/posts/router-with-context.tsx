import { ReactNode } from 'react';
import { MemoryRouter, Outlet, Routes, Route } from 'react-router-dom'

interface RenderRouteWithOutletContextProps<T = any> {
  context: T;
  children: ReactNode;
}

export const RenderRouteWithOutletContext = ({
    context,
    children,
  }: RenderRouteWithOutletContextProps) => {
    return (
      <MemoryRouter>
        <Routes>
          <Route path="/"element={<Outlet context={context} />}>
            <Route index element={children} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
  };