import React from 'react'
import { getUserDetails, getActivityData } from '../../utils/api'
import { Tabs, TabList, Tab, TabPanels, TabPanel, Text, Box, Center } from '@chakra-ui/react'
import ActivityPanel from '../../components/activitypanel'
import { useParams } from 'react-router-dom'
import CrakinDevFooter from '../../components/crakindevfooter'

export function GuardianDashboardPage(props)
{
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    //const [activityData, setActivityData] = React.useState({})
    const [currentActivity, setcurrentActivity] = React.useState(3)

    const { history } = props
    const bungieAcctId = props.match.params.bungieAcct

    // Ensures user has authenticated with Discord to protect route from unauthorized access
    React.useEffect( () => {
        getUserDetails()
            .then(({ data }) => {
                setUser(data)
                setLoading(false)
            })
            .catch((err) => {
                history.push('/')
                setLoading(false)
            })
    }, [])

    function setTabIndex(index)
    {
        console.log(`Set tab index to ${index}`)
        switch(index)
        {
            case 0:     // Strikes
                setcurrentActivity(3)
                break

            case 1:     // Nightfall
                setcurrentActivity(46)
                break

            case 2:     // Crucible
                setcurrentActivity(3)
                break
        }
    }


    return !loading && (
    //return(
        <div>
            <Text fontSize="5xl">Dashboard</Text>
            <Box p={3} borderWidth={1} borderRadius={8} boxShadow="lg" mx={6} my={3}>
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
                            <Center><Text fontSize="4xl" my={3}>Strikes</Text></Center>
                            <ActivityPanel bungieAcct={bungieAcctId} activity='3' />
                        </TabPanel>
                        <TabPanel>
                        <Center><Text fontSize="4xl" my={3}>Nightfall</Text></Center>
                            <ActivityPanel bungieAcct={bungieAcctId} activity='46' />
                        </TabPanel>
                        <TabPanel>
                            <Center><Text fontSize="4xl" my={3}>Crucible</Text></Center>
                            <ActivityPanel bungieAcct={bungieAcctId} activity='5' />
                        </TabPanel>
                        <TabPanel>
                            <Center><Text fontSize="4xl" my={3}>Iron Banner</Text></Center>
                            <ActivityPanel bungieAcct={bungieAcctId} activity='19' />
                        </TabPanel>
                        <TabPanel>
                            <Center><Text fontSize="4xl" my={3}>Trials of Osiris</Text></Center>
                            <ActivityPanel bungieAcct={bungieAcctId} activity='84' />
                        </TabPanel>
                        <TabPanel>
                            <Center><Text fontSize="4xl" my={3}>Raids</Text></Center>
                            <ActivityPanel bungieAcct={bungieAcctId} activity='4' />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
            <CrakinDevFooter />
        </div>
    )
}