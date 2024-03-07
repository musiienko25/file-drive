"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignOutButton,
  SignedOut,
  SignedIn,
  useOrganization,
} from "@clerk/nextjs";
import { api } from "../../convex/_generated/api";
import { useMutation, useQuery } from "convex/react";

export default function Home() {
  const { organization } = useOrganization();
  const createFile = useMutation(api.files.createFile);
  const files = useQuery(
    api.files.getFiles,
    organization?.id ? { orgId: organization?.id } : "skip"
  );
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

      {files?.map((file) => {
        return <div key={file._id}>{file.name}</div>;
      })}
      <Button
        onClick={() => {
          console.log(organization);
          if (!organization) return;
          createFile({ name: "hello world", orgId: organization?.id });
        }}
      >
        Button
      </Button>
    </main>
  );
}
