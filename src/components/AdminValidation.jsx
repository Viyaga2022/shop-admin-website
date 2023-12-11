"use client"

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthToken } from '@/utils/common'

const AdminValidation = () => {
    const navigation = useRouter()
    const { admin, subAdmin } = useSelector(state => state.admin)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!admin && !subAdmin) {
            const token = getAuthToken()
            if (!token) {
                return navigation.replace('/login-register')
            }

            const decoded = jwtDecode(token)
            const expiryDate = decoded.exp * 1000
            if (Date.now() > expiryDate) {
                return navigation.replace('/login-register')
            }

            if (decoded.role === "subAdmin") {
                const shopCategory = decoded.shopCategory
                const shopId = decoded.shopId
                return navigation.replace(`/${shopCategory}/${shopId}`)
            }

            if (decoded.role === "admin") {
                const id = decoded.id
                //dispatch()
                return navigation.replace(`/admin/${id}`)
            }
        }

        if (subAdmin) {
            const shopCategory = subAdmin.shopCategory
            const shopId = subAdmin.shopId
            return navigation.replace(`/${shopCategory}/${shopId}`)
        }

        console.log({ decoded });
    }, [admin, subAdmin])

    return (
        <></>
    )
}

export default AdminValidation