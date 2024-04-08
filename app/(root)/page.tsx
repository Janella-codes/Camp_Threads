import { UserButton } from "@clerk/nextjs";

const { version } = require('next/package.json');
console.log(`Next.js version: ${version}`);


export default function Home() {
  return (
    <>
        <h1 className="text-cyan-200 head-text text-left">Home</h1>
    </>
  )
}

