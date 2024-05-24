import { Navigate } from 'react-router-dom';
import { DcPage, MarvelPage } from '../pages';

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DcPage />} />
                    {/* Searh Hero by id */}
                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>
            </div>
        </>
    );
};
