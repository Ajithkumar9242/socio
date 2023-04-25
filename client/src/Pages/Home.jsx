import React from 'react'
import Nav from './Topbar'
import SimpleSidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import { Flex, Spacer } from '@chakra-ui/react'
import AvatarWithRipple from '../components/RightBar'
import SocialProfileSimple from '../components/RightBar'
import SignupCard from '../auth/Register'
import SimpleCard from '../auth/Login'

const Home = () => {
  return (
    <div>
      <Nav />
      <Flex>
      <SimpleSidebar />

      <Feed />
    <SocialProfileSimple />
      </Flex> 
      {/* <SimpleCard /> */}
    </div>
  )
}

export default Home