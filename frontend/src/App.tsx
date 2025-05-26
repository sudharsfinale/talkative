import { Button, HStack } from "@chakra-ui/react";
const App = () => {
  return (
    <div>
      <HStack>
        <Button colorPalette={"teal"}>Click me</Button>
        <Button>Click me</Button>
      </HStack>
    </div>
  );
};

export default App;
