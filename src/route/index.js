import React from 'react'
import { Routes, Route } from 'react-router-dom'
import path from './paths'

const Router = () => {
    return (
        <>
            <Routes>
                {
                    path.map((route, index) => <Route key={`seeker-route-${index}`} path={route.path} element={route.element} />)
                }
            </Routes>
        </>
    )
}

export default Router