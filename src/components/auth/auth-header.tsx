import { AppLogo } from "@/components/common/app-logo";
import { Heading } from "../headings/heading";
import { SubHeading } from "../headings/sub-heading";

export function AuthHeader() {
  return (
    <div className="text-center space-y-2">
      <AppLogo />
      <Heading>Welcome to Weechoo</Heading>
      <SubHeading>Corporate meals platform for Africa</SubHeading>
    </div>
  );
}
