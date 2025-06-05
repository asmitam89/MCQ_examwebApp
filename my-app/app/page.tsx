"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function page() {

  return (

    <Link href="/Login" passHref>
      <h1>Welcome to MCQ Test exam </h1>
      <Button
      >
        Take a Test
      </Button>
    </Link>

  );
}


