import { Route, Routes } from 'react-router-dom';
import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
//Las rutas publicas son para que una vez logueado no se pueda volver al login, solo se quede en los componenetes de Marvel o DC.
//Las rutas privadas son para proteger a las paginas en dichas rutas de que se accedan si una persona no está autenticada.
export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route
                    path='login'
                    element={
                        <PublicRoute>
                            <LoginPage />
                        </PublicRoute>
                    }
                />
                <Route
                    path='/*'
                    element={
                        <PrivateRoute>
                            <HeroesRoutes />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </>
    );
};
