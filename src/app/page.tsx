import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignOutButton,
  SignedOut,
  SignedIn,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedOut>
        {" "}
        <SignInButton mode="modal"></SignInButton>{" "}
      </SignedOut>

      <SignedIn>
        {" "}
        <SignOutButton></SignOutButton>
      </SignedIn>

      <Button>Button</Button>
    </main>
  );
}
