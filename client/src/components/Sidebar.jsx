import React from "react"
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Avatar, AvatarBadge, AvatarGroup, Wrap, WrapItem, VStack 
} from "@chakra-ui/react"


import { FiYoutube  } from 'react-icons/fi';
import { BiGroup  } from 'react-icons/bi';
import { MdRssFeed  } from 'react-icons/md';
import { BsFillChatDotsFill , BsCalendarEvent ,BsFillPatchQuestionFill, BsFillBookmarkPlusFill} from 'react-icons/bs';

const LinkItems = [
  { name: "Videos", icon: FiYoutube },
  { name: "Chat", icon: BsFillChatDotsFill },
  { name : "Feed" , icon: MdRssFeed},
  { name : "Events" , icon: BsCalendarEvent},
  { name: "Group", icon: BiGroup },
  { name: "Questions", icon: BsFillPatchQuestionFill },
  { name: "Bookmarks", icon: BsFillBookmarkPlusFill }
]

const Persons = [
  { names: "First", image: "https://images.unsplash.com/photo-1682160778546-5b7209af0efe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" },
  { names: "sec", image: "https://images.unsplash.com/photo-1682160778546-5b7209af0efe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" },
  { names : " Feethirdd" , image: "https://images.unsplash.com/photo-1682160778546-5b7209af0efe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
  { names : " foute" , image: "https://images.unsplash.com/photo-1682160778546-5b7209af0efe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
  { names : " foute" , image: "https://images.unsplash.com/photo-1682160778546-5b7209af0efe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
  { names : " foute" , image: "https://images.unsplash.com/photo-1682160778546-5b7209af0efe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
  { names : " foute" , image: "https://images.unsplash.com/photo-1682160778546-5b7209af0efe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
  { names : " foute" , image: "https://images.unsplash.com/photo-1682160778546-5b7209af0efe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
  { names : " foute" , image: "https://images.unsplash.com/photo-1682160778546-5b7209af0efe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},

]


export default function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box h={"auto"} bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  )
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="relative"
      h="auto"
      {...rest}
    >
      <Flex h={"auto"} alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map(link => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}

      <hr />
      <hr />
      <hr />

      
      <NavItem>
       
      <VStack>
          { Persons.map(per =>(

      <Avatar key={per.names} src={per.image} >
      </Avatar>
          ))}
  </VStack>
  </NavItem>
    </Box>
  )
}

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

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      // height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        // icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  )
}
