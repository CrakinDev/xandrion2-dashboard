import React from 'react'
import { getUserDetails } from '../../utils/api'

export function GuardianDashboardPage(props)
{
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const { history } = props
    const bungieAcctId = props.match.params.bungieAcct

    // Ensures user has authenticated with Discord to protect route from unauthorized access
    React.useEffect( () => {
        getUserDetails()
            .then(({ data }) => {
                console.log(data)
                setUser(data)
                setLoading(false)
            })
            .catch((err) => {
                history.push('/')
                setLoading(false)
            })
    }, [])
    return !loading && (
        <div>
            <h1>Dashboard Page</h1>
            <p>{bungieAcctId}</p>
        </div>
    )
}