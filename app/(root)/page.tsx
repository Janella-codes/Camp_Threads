import { UserButton } from "@clerk/nextjs";

const { version } = require('next/package.json');
console.log(`Next.js version: ${version}`);


export default function Home() {
  return (
    <>
        <h1 className="head-test text-left">Home</h1>
    </>
  )
}

