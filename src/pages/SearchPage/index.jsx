import React from 'react'
import { getUserDetails } from '../../utils/api'

export function SearchPage(props)
{
    const [loading, setLoading] = React.useState(true)

    const { history } = props

    // Ensures user has authenticated with Discord to protect route from unauthorized access
    React.useEffect( () => {
        getUserDetails()
            .then(({ data }) => {
                console.log(data)
                setLoading(false)
            })
            .catch((err) => {
                history.push('/')
                setLoading(false)
            })
    }, [])
    return !loading && (
        <div>
            <h1>Menu Page</h1>
        </div>
    )
}