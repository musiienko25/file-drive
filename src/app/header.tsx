import { UserButton } from "@clerk/nextjs";
import { OrganizationSwitcher } from "@clerk/nextjs";

export function Header() {
  return (
    <div className="border-b">
      <div className="container mx-auto justify-between flex bg-gray-50 items-center">
        <div>FileDrive</div>
        <OrganizationSwitcher />
        <UserButton />
      </div>
    </div>
  );
}
