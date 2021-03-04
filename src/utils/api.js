import axios from 'axios'

export function getUserDetails()
{
    return axios.get(`${process.env.REACT_APP_XANDRION_API}api/auth`,
    {
        withCredentials: true
    })
}

export function getBungieUserDetails(username, platform, discordId, toastContext)
{
    return axios.post(`${process.env.REACT_APP_XANDRION_API}api/register/${discordId}`, {
        NAME: username,
        PLATFORM: platform
    })
}

export function getActivityData(bMembershipId, activityMode)
{
    console.log(`Get activity data with acct ${bMembershipId} and activity ${activityMode}`)
    return axios.get(`${process.env.REACT_APP_XANDRION_API}api/stats/activities/${bMembershipId}/${activityMode}`)
}

export function getBungieCharacterDetails(bMembershipId, platform)
{
    console.log(`Get Character data with acct ${bMembershipId} and activity ${platform}`)
    return axios.get(`${process.env.REACT_APP_XANDRION_API}api/stats/character/${bMembershipId}/${platform}`)
}