import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { EventInput } from "@fullcalendar/core";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import resourcePlugin from "@fullcalendar/resource";
import { EmployeeColumn } from "@/lib/validators";

interface RosterCalendarProps {
  rosterEligibleEmployees: EmployeeColumn[];
}

const RosterCalendar = ({ rosterEligibleEmployees }: RosterCalendarProps) => {
  // List of employees to be displayed at the top

  const [events, setEvents] = useState<EventInput[]>([]);

  // Handle employee drop event on calendar
  const handleEventReceive = (info: any) => {
    const newEvent: EventInput = {
      id: info.draggedEl.getAttribute("data-employee-id"),
      title: info.draggedEl.innerText,
      date: info.dateStr,
      extendedProps: {
        shift: info.draggedEl.getAttribute("data-shift") || "Morning", // Default shift if none specified
      },
    };
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  useEffect(() => {
    const draggableEl = document.getElementById("employee-list");
    if (draggableEl) {
      new Draggable(draggableEl, {
        itemSelector: '[draggable="true"]',
        eventData: function (eventEl) {
          return {
            title: eventEl.innerText,
            extendedProps: {
              employeeId: eventEl.getAttribute("data-employee-id"),
            },
          };
        },
      });
    }
  }, []);

  return (
    <div className="p-4">
      {/* Employee List */}
        <h3 className="font-medium">Employee List</h3>
      <div id="employee-list" className="flex space-x-4 mb-6 mt-3">
        {rosterEligibleEmployees.map((employee) => (
          <div
            key={employee.id}
            className="bg-blue-100 text-blue-800 p-2 cursor-pointer"
            draggable="true"
            data-employee-id={employee.id}
          >
            {employee.first_name + " " + employee.last_name}
          </div>
        ))}
      </div>
      <div className="">
        <FullCalendar
          plugins={[interactionPlugin, resourcePlugin, resourceTimelinePlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "resourceTimelineWeek,resourceTimelineDay",
          }}
          initialView="resourceTimelineWeek"
          // resourceDayGridWeek
          // resourceTimelineWeek
          // resourceTimeline
          height={"auto"}
          // duration={{ days: 7 }}
          slotDuration={{ days: 1 }}
          slotMinWidth={50}
          slotLabelFormat={{
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
          }}
          editable={true}
          droppable={true}
          events={events}
          eventReceive={handleEventReceive} // When an employee is dropped onto a date
          resourceAreaColumns={[
            {
              field: "title",
              headerContent: "Shifts",
              
            },
          ]}
          resources={[
            { id: "a", title: "Morning Shift" },
            { id: "b", title: "Afternoon Shift" },
            { id: "c", title: "Night Shift" },
          ]}
          weekends={true}
          eventContent={(eventInfo : any) => (
            <div>
              {eventInfo.event.title}
              <div className="text-sm text-gray-500">
                {eventInfo.event.extendedProps.shift}
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default RosterCalendar;
