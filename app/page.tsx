"use client"

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState<string>('');
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Input placeholder='Enter a meeting name...' onInput={e => setName(e.currentTarget.value)} />
          {name.length > 0 &&
            <Button>
              Continue
            </Button>
          }
        </div>
      </main >
    </div >
  );
}

function date() {
  const [dates, setDates] = useState<Date[]>([]);
  return (
    <>
      <Calendar
        mode="multiple"
        selected={dates}
        onSelect={(selectedDates) => {
          if (Array.isArray(selectedDates)) {
            setDates(selectedDates);
          } else {
            setDates([]);
          }
        }}
        className="rounded-md border"
      />
    </>
  )
}
