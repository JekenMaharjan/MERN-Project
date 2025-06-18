'use client'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Skeleton } from '@/components/ui/skeleton'
import React, { useState } from 'react'
import { toast } from 'sonner'

const Register = () => {

    const [date, setDate] = React.useState<Date | undefined>(new Date())

    const handleRegister = () => {
        toast("Registration Successful", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
            },
            })
    }

    return (
        <div className='bg-slate-500 p-5'>
            {/* Calender */}
            <div className="bg-white flex flex-col flex-wrap items-start gap-2 @md:flex-row m-5 inline-block">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border shadow-sm"
                />
            </div><br/>

            {/* Skeleton */}
            <div className="bg-gray-500 inline-block flex items-center space-x-4 p-2 m-5">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div><br/>

            {/* Button With Sonner */}
            <Button onClick={() => handleRegister()} className='p-2 m-5'>Register</Button>
        </div>
  )
}

export default Register