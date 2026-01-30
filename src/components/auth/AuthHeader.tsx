import { AppLogo } from "@/components/common/AppLogo";
import { Heading } from "../headings/Heading";
import { SubHeading } from "../headings/SubHeading";

export function AuthHeader() {
  return (
    <div className="text-center space-y-2">
      <AppLogo />
      <Heading>Welcome to Weechoo</Heading>
      <SubHeading>Corporate meals platform for Africa</SubHeading>
    </div>
  );
}
