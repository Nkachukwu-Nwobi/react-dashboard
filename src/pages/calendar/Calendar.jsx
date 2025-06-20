import {useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { formatDate } from "@fullcalendar/core";
import './calendar.css'

function Calendar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");

    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    console.log("selected:", selected)
    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };


  return (
    <main>
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

      <section className=" flex justify-between mt-10 mx-10">
        <div className=" w-[20%]" style={{ backgroundColor: colors.primary[400], padding: "15px",
          borderRadius:"4px"}}>
          <h5 style={{ color: colors.primary[400] }}>Events</h5>
          <div className=" flex flex-col gap-4">
            {currentEvents.map((event) => (
              <div key={event.id} style={{ backgroundColor: colors.greenAccent[500], padding: "5px", borderRadius: "2px" }}>
                <h5>{event.title}</h5>
                <p>
                  {formatDate(event.start, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                  {event.end && " - "}
                  {formatDate(event?.end, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[75%]">
          <FullCalendar
          height='75vh'
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin
            ]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            droppable={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "1",
                title: "All-day event",
                date: "2025-05-05",
              },
              {
                id: "2",
                title: "Timed event",
                date: "2025-05-06",
              },
            ]}
            

            // events={[
            //   { title: "event 1", date: "2019-04-01" },
            //   { title: "event 2", date: "2019-04-02" },
            // ]}
          />
        </div>
      </section>
    </main>
  );
}

export default Calendar;
