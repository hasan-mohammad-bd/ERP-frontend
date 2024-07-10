"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"


import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/utils"

interface DatePickerWithRangeProps {
  className?: string,
  setStartDate?: (value: Date | null) => void;
  setEndDate?: (value: Date | null) => void;
}

export function DatePickerWithRange({
  className,
  setStartDate,
  setEndDate
}: DatePickerWithRangeProps) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    //start from current month 1st date.
    from: new Date(new Date().getFullYear(), new Date().getMonth(), 1), 
  
    //get last date of current month
    to: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0), 
    

  })


  React.useEffect(() => {
    setStartDate?.(date?.from || null)
    setEndDate?.(date?.to || null)
  },[date?.from, date?.to, setStartDate, setEndDate])

  

  return (
    <div className={cn("grid gap-2 ", className)}>
      <Popover >
        <PopoverTrigger asChild>
          <Button
          size={"input"}
            id="date"
            variant={"outline"}
            className={cn(
              "w-[250px] justify-start text-left font-normal ",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(new Date(date.from ?? 0), 'dd-MMM-yyyy')} -{" "}
                  {format(new Date(date.to ?? 0), 'dd-MMM-yyyy')}
                </>
              ) : (
                format(new Date(date.from ?? 0), 'dd-MMM-yyyy')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
