"use client"

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react";

type ComponentToRender = 'meeting' | 'date';

export default function Home() {
  const [componentToRender, setComponentToRender] = useState<ComponentToRender>('meeting');

  let component: JSX.Element | null;
  switch (componentToRender) {
    case 'meeting':
      component = <Meeting />
      break;
    case 'date':
      component = <Date />
      break;
    default:
      component = null;
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {component}
          <Button onClick={() => setComponentToRender('date')}>
            Continue
          </Button>
        </div>
      </main >
    </div >
  );
}

function Meeting() {
  const [name, setName] = useState<string>('');
  return (
    <>
      <Input placeholder='Enter a meeting name...' onInput={e => setName(e.currentTarget.value)} />
    </>
  )
}

function Date() {
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
