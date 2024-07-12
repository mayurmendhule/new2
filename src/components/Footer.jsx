import { Box, Button, HStack, Input, Text, Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size="md" textTransform={'uppercase'}>
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py='2'>
            
            <Input placeholder='Enter Email Here...' border={'none'}/>
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack w={'full'}
        borderLeft={["none", "1px solid white"]}
        borderRight={["none", "1px solid white"]}
        >
           <Heading  textAlign={"center"}>
           FlickHive
            </Heading> 
            < Text> @All rights received</Text>
        </VStack>

        <VStack w={'full'} gap={"1.5rem"}>
            <Heading size={'md'} textTransform={'uppercase'}>
                Social Media
            </Heading>
            <HStack spacing={4} >
            <Button variant={"link"} colorScheme={"purple"}>
                <a target={'blank'}  href="https://youtube.com" >YouTube</a>
            </Button>

            <Button variant={"link"} colorScheme={"purple"}>
                <a target={'blank'} href="https://instagram.com" >Instagram</a>
            </Button>

            <Button variant={"link"} colorScheme={"purple"}>
                <a target={'blank'} href="https://github.com" >GitHub</a>
            </Button>
            </HStack>
        </VStack>

      </Stack>
    </Box>
  );
};

export default Footer;
