import React from 'react'
import { getUserDetails, getBungieCharacterDetails } from '../../utils/api'
import { Tabs, TabList, Tab, TabPanels, TabPanel, Text, Box, Center } from '@chakra-ui/react'
import ActivityPanel from '../../components/activitypanel'
import { useParams } from 'react-router-dom'
import DashboardHeader from '../../components/dashboardheader'
import CrakinDevFooter from '../../components/crakindevfooter'

export function GuardianDashboardPage(props)
{
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    //const [activityData, setActivityData] = React.useState({})
    const [currentActivity, setcurrentActivity] = React.useState(3)
    const [characterEmblems, setCharacterEmblems] = React.useState([])
    const [characterLight, setCharacterLight] = React.useState([])

    const { history } = props
    const bungieAcctId = props.match.params.bungieAcct

    // Ensures user has authenticated with Discord to protect route from unauthorized access
    React.useEffect( () => {
        console.log("Use Effect 1")
        getUserDetails()
            .then(({ data }) => {
                setUser(data)
                console.log(data[0].bungiePlatform)
                getBungieCharacterDetails( data[0].bungieAcct, data[0].bungiePlatform )
                    .then(async (charData) => {
                        console.log("Char Data")
                        console.log(charData)
                        Object.keys(charData.data.Response.characters.data).forEach(charId => {
                            console.log("Char Data Embs")
                            setCharacterEmblems(characterEmblems => [...characterEmblems, charData.data.Response.characters.data[charId].emblemPath])
                            setCharacterLight(characterLight => [...characterLight, charData.data.Response.characters.data[charId].light])
                        })
                        setLoading(false)
                    })
            })
            .catch((err) => {
                //history.push('/')
                console.log(err)
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
            <DashboardHeader emblems={characterEmblems} light={characterLight} />
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