import { Button, Field, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { PasswordInput } from "../ui/password-input";

type User = {
    name: string;
    email: string;
    password: string;
}

const SignUp = () => {
  const [user, setUser] = useState<User>({ name: "", email: "", password: "" });
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmitForm = (user:User) => {
    console.log(user);
  };
  return (
    <VStack gap="10" width="full" p={10}>
      <Field.Root required>
        <Field.Label>
          Name <Field.RequiredIndicator />
        </Field.Label>
        <Input
          name="name"
          value={user.name}
          onChange={(e) => onChangeInput(e)}
          placeholder="me@example.com"
          variant="outline"
        />
      </Field.Root>
      <Field.Root required>
        <Field.Label>
          Email <Field.RequiredIndicator />
        </Field.Label>
        <Input
          autoComplete="new-email"
          name="email"
          value={user.email}
          onChange={(e) => onChangeInput(e)}
          placeholder="me@example.com"
          variant="outline"
        />
      </Field.Root>
      <Field.Root required>
        <Field.Label>
          Password <Field.RequiredIndicator />
        </Field.Label>
        <PasswordInput
          value={user.password}
          onChange={(e) => onChangeInput(e)}
          name="password"
          placeholder="me@example.com"
          variant="outline"
        />
      </Field.Root>
      <Field.Root>
        <Field.Label>
          Upload Image <Field.RequiredIndicator />
        </Field.Label>
        <Input
        //   value={user.password}
          onChange={(e) => {console.log(e)}}
          name="file"
          placeholder="me@example.com"
          variant="outline"
          type="file"
        />
      </Field.Root>
      <Button
        onClick={() => onSubmitForm(user)}
        background={"black"}
        w={"full"}
        color={"white"}
      >
        Join us
      </Button>
    </VStack>
  );
};

export default SignUp;
