import { UserButton } from "@clerk/nextjs";

export function Header() {
  return (
    <div className="border-b">
      <div className="container mx-auto">
        Hello worldd <UserButton />
      </div>
    </div>
  );
}
