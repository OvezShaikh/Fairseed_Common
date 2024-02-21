import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserEdit from '../../components/AdminPanelPages/Froms/UserEdit/Index'

function FormsRoute() {
    return (
        <Routes>
            <Route
                path="/Edit"
                element={
                    <AdminLayout>
                        <UserEdit />
                    </AdminLayout>
                }
            />
        </Routes>
    )
}

export default FormsRoute
