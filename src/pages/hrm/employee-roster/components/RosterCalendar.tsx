"use client";
import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, {
  Draggable,
  DropArg,
} from "@fullcalendar/interaction";
// import timeGridPlugin from "@fullcalendar/timegrid";
import { useEffect, useState } from "react";
// import { Dialog, Transition } from '@headlessui/react'
// import { CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import { EventSourceInput, EventInput } from "@fullcalendar/core";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import resourcePlugin from "@fullcalendar/resource";
import { EmployeeColumn } from "@/lib/validators";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlertModal } from "@/components/common/alert-modal";

// interface Event {
//   title: string;
//   start: Date | string;
//   allDay: boolean;
//   id: number;
// }

interface RosterCalendarProps {
  rosterEligibleEmployees: EmployeeColumn[];
}

const RosterCalendar = ({ rosterEligibleEmployees }: RosterCalendarProps) => {
  const [allEvents, setAllEvents] = useState<EventInput[]>([]);
  // const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState<number | null>(null);
  const [newEvent, setNewEvent] = useState<EventInput>({
    title: "",
    start: "",
    allDay: false,
    id: "0",
  });

  console.log(allEvents, "allEvents");

  useEffect(() => {
    const draggableEl = document.getElementById("draggable-el");
    if (draggableEl) {
      new Draggable(draggableEl, {
        itemSelector: ".fc-event",
        eventData: function (eventEl) {
          const title = eventEl.getAttribute("title");
          const id = eventEl.getAttribute("data");
          const start = eventEl.getAttribute("start");
          return { title, id, start };
        },
      });
    }
  }, []);

  function handleDateClick(arg: { date: Date; allDay: boolean }) {
    setNewEvent({
      ...newEvent,
      start: arg.date,
      allDay: arg.allDay,
      id: new Date().getTime().toString(),
    });
    // setShowModal(true);
  }

  function addEvent(data: DropArg) {
    const event = {
      ...newEvent,
      id: new Date().getTime().toString(),
      start: data.date.toISOString(),
      title: data.draggedEl.innerText,
      allDay: data.allDay,
      resourceId: data.resource?.id,
    };
    setAllEvents([...allEvents, event]);
  }

  function handleDeleteModal(data: { event: { id: string } }) {
    setShowDeleteModal(true);
    setIdToDelete(Number(data.event.id));
  }

  function handleDelete() {
    setAllEvents(
      allEvents.filter((event) => Number(event.id) !== Number(idToDelete))
    );
    setShowDeleteModal(false);
    setIdToDelete(null);
  }

  function handleCloseModal() {
    // setShowModal(false);
    setNewEvent({
      title: "",
      start: "",
      allDay: false,
      id: "0",
    });
    setShowDeleteModal(false);
    setIdToDelete(null);
  }

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   setNewEvent({
  //     ...newEvent,
  //     title: e.target.value,
  //   });
  // };

  // function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   setAllEvents([...allEvents, newEvent]);
  //   setShowModal(false);
  //   setNewEvent({
  //     title: "",
  //     start: "",
  //     allDay: false,
  //     id: "0",
  //   });
  // }

  return (
    <>
      <div className="p-4">
        <div id="draggable-el" className="w-full">
          <h3 className="font-medium">Employee List</h3>
          <div className="flex gap-4 mb-6 mt-3 flex-wrap">
            {rosterEligibleEmployees.map((employee) => (
              <div
                className="fc-event px-2 py-1 cursor-pointer flex items-center justify-center rounded-md gap-x-2 border bg-slate-100 hover:bg-slate-200"
                title={employee.first_name}
                key={employee.id}
              >
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>{employee.first_name[0]}</AvatarFallback>
                </Avatar>
                <h3>{employee.first_name + " " + employee.last_name}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="roster-calendar">
          <FullCalendar
            plugins={[
              // dayGridPlugin,
              interactionPlugin,
              // timeGridPlugin,
              resourceTimelinePlugin,
              resourcePlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "resourceTimelineWeek,resourceTimelineDay",
              // right: 'resourceTimelineWeek, dayGridMonth,timeGridWeek'
            }}
            initialView="resourceTimelineWeek"
            height={"auto"}
            // duration={{ days: 7 }}
            slotDuration={{ days: 1 }}
            slotMinWidth={50}
            resourceAreaWidth={250}
            slotLabelFormat={{
              weekday: "short",
              year: "numeric",
              month: "short",
              day: "numeric",
            }}
            events={allEvents as EventSourceInput}
            nowIndicator={true}
            editable={true}
            droppable={true}
            selectable={true}
            selectMirror={true}
            dateClick={handleDateClick}
            drop={(data) => addEvent(data)}
            eventClick={(data) => handleDeleteModal(data)}
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
          />
        </div>
      </div>

      <AlertModal
        isOpen={showDeleteModal}
        onClose={handleCloseModal}
        onConfirm={handleDelete}
        title="Delete Event"
        alertMessage="Are you sure you want to add this event?"
      />

      {/* 
        <Transition.Root show={showModal} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setShowModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                    <div>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                          Add Event
                        </Dialog.Title>
                        <form action="submit" onSubmit={handleSubmit}>
                          <div className="mt-2">
                            <input type="text" name="title" className="block w-full rounded-md border-0 py-1.5 text-gray-900 
                            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                            focus:ring-2 
                            focus:ring-inset focus:ring-violet-600 
                            sm:text-sm sm:leading-6"
                              value={newEvent.title} onChange={(e) => handleChange(e)} placeholder="Title" />
                          </div>
                          <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                            <button
                              type="submit"
                              className="inline-flex w-full justify-center rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 sm:col-start-2 disabled:opacity-25"
                              disabled={newEvent.title === ''}
                            >
                              Create
                            </button>
                            <button
                              type="button"
                              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                              onClick={handleCloseModal}

                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root> */}
    </>
  );
};

export default RosterCalendar;
