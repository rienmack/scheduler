'use client'

import { Calendar } from "@/components/ui/calendar"
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'

export default function Page() {
  const [dates, setDates] = useState<Date[]>([]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        Enter the dates you are available:
        <div className="flex gap-4 items-center flex-col sm:flex-row">
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
          {dates.length > 0 &&
            <Link href="/date" className={buttonVariants({ variant: "default" })}>Continue</Link>
          }
        </div>
      </main >
    </div >
  );
}
