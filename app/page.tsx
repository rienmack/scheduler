"use client"

import { Input } from '@/components/ui/input'
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState<string>('');
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Input placeholder='Enter a meeting name...' onInput={e => setName(e.currentTarget.value)} />
          {name.length > 0 &&
            <Link href={{ pathname: '/date', query: { name: name } }} className={buttonVariants({ variant: "default" })}>
              Continue
            </Link>
          }
        </div>
      </main >
    </div >
  );
}
