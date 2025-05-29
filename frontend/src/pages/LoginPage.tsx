import { Box, Button, Container, Flex, Tabs, Text } from "@chakra-ui/react";
import type React from "react";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";

const LoginPage = (): React.ReactNode => {
  return (
    <div className="h-[100dvh] bg-lime-100 text-teal-950 flex items-center justify-center">
      <Container maxW={"xl"}>
        <Flex align={"center"} justify={"center"} p={"3"} background={"white"}>
          <Text fontSize={"4xl"} fontFamily={"Work Sans"}>
            Talk-A-Tive
          </Text>
        </Flex>
        <Box w={"100%"} background={"white"} mt={"2"} p={"2"}>
          <Tabs.Root defaultValue="login" variant="plain">
            <Tabs.List w={"100%"} bg="bg.muted" rounded="l3" p="1">
              <Tabs.Trigger display={"flex"} alignItems={"center"} justifyContent={"center"} w={"50%"} value="login">
                {/* <LuUser /> */}
                Login
              </Tabs.Trigger>
              <Tabs.Trigger display={"flex"} alignItems={"center"} justifyContent={"center"} w={"50%"} value="signup">
                {/* <LuFolder /> */}
                Signup
              </Tabs.Trigger>
              <Tabs.Indicator rounded="l2" />
            </Tabs.List>
            <Tabs.Content value="login">
              <Login />
            </Tabs.Content>
            <Tabs.Content value="signup">
              <SignUp />
            </Tabs.Content>
          </Tabs.Root>
        </Box>
      </Container>
    </div>
  );
};

export default LoginPage;
