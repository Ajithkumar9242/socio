import { Avatar, Box, Flex, Icon, Input, Link, Spacer, Image, WrapItem, Text, Button, CardFooter, CardBody, IconButton, Heading, CardHeader, Card, Wrap } from '@chakra-ui/react'
import React from 'react'
import { MdAddPhotoAlternate  } from 'react-icons/md';
import { AiFillTag  } from 'react-icons/ai';
import { BiChat, BiCurrentLocation, BiLike, BiShare  } from 'react-icons/bi';
import { CiShare1  } from 'react-icons/ci';
import { BsThreeDotsVertical } from 'react-icons/bs';
import FeedPost from './feedPost';




const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white"
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white"
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}

const Feed = () => {



  const Logos = [
  {name: "Photo",  icon: MdAddPhotoAlternate },
  {name: "Video", icon: AiFillTag },
  {name: "Tag",  icon: BiCurrentLocation},
  {name: "Location",  icon: CiShare1},
]
  return (
    <div>
    <Box w={"auto"} alignItems={"center"} justifyContent={"center"}>
      <WrapItem>
    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' mr={"1em"}/>
    <Input placeholder='Post Something' borderWidth={"2px"} w={"20em"}/>
     </WrapItem>
<br />
     <hr />
     <Box>
  <Flex>
    {Logos.map(log => (
        <NavItem key={log.name}  icon={log.icon}>
          {log.name}
        </NavItem>
        ))}
  </Flex>
  </Box>
    </Box>

<FeedPost />
<FeedPost />
<FeedPost />

    </div>
  )
}

export default Feed