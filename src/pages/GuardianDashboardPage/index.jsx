import React from 'react'
import { getUserDetails, getActivityData } from '../../utils/api'
import { Tabs, TabList, Tab, TabPanels, TabPanel, Box } from '@chakra-ui/react'
import ActivityPanel from '../../components/activitypanel'
import { useParams } from 'react-router-dom'

export function GuardianDashboardPage(props)
{
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    //const [activityData, setActivityData] = React.useState({})
    const [currentActivity, setcurrentActivity] = React.useState(3)

    const { history } = props
    const bungieAcctId = props.match.params.bungieAcct

    // Ensures user has authenticated with Discord to protect route from unauthorized access
    // React.useEffect( () => {
    //     getUserDetails()
    //         .then(({ data }) => {
    //             console.log(data)
    //             setUser(data)
    //             setLoading(false)
    //         })
    //         .catch((err) => {
    //             history.push('/')
    //             setLoading(false)
    //         })
    // }, [])

    // React.useEffect( () => {
    //     getActivityData(bungieAcctId, currentActivity)
    //         .then((res) => {
    //             setActivityData(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //     }, [currentActivity]
    // )

    function setTabIndex(index)
    {
        console.log(`Set tab index to ${index}`)
        switch(index)
        {
            case 0:     // Strikes
                setcurrentActivity(3)
                break

            case 1:     // Nightfall
                console.log("Switching activity to 46")
                setcurrentActivity(46)
                break

            case 2:     // Crucible
                setcurrentActivity(3)
                break
        }
    }


    // return !loading && (
    return(
        <div>
            <h1>Dashboard Page</h1>
            <p>{bungieAcctId}</p>
            <Box p={3} borderWidth={1} borderRadius={8} boxShadow="lg" mx='auto' my={3}>
                <Tabs isManual isLazy isFitted onChange={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Strikes</Tab>
                        <Tab>Nightfall</Tab>
                        <Tab>Crucible</Tab>
                        <Tab>Iron Banner</Tab>
                        <Tab>Trials of Osiris</Tab>
                        <Tab>Raids</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <p>Strikes</p>
                            <ActivityPanel bungieAcct={bungieAcctId} activity='3' />
                        </TabPanel>
                        <TabPanel>
                            <p>Nightfall</p>
                            <ActivityPanel bungieAcct={bungieAcctId} activity='46' />
                        </TabPanel>
                        <TabPanel>
                            <p>Crucible</p>
                            {/* <ActivityPanel activity='5' /> */}
                        </TabPanel>
                        <TabPanel>
                            <p>Iron Banner</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Trials of Osiris</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Raids</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </div>
    )
}