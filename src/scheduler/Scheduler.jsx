import React, { useEffect, useRef, useState } from "react";
import { DayPilot, DayPilotScheduler } from "@daypilot/daypilot-lite-react";

const Scheduler = () => {
  const schedulerRef = useRef(null);

  const [theme, setTheme] = useState("scheduler_default");
  const [startDate] = useState("2026-07-01");
  const [resources, setResources] = useState([]);
  const [events, setEvents] = useState([]);

  const onTimeRangeSelected = async (args) => {
    const dp = args.control;
    const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
    dp.clearSelection();
    if (modal.canceled) return;
    dp.events.add({
      start: args.start,
      end: args.end,
      id: DayPilot.guid(),
      resource: args.resource,
      text: modal.result,
    });
  };

  useEffect(() => {
    setResources([
      { name: "Resource A", id: "A" },
      { name: "Resource B", id: "B" },
      { name: "Resource C", id: "C" },
      { name: "Resource D", id: "D" },
      { name: "Resource E", id: "E" },
      { name: "Resource F", id: "F" },
      { name: "Resource G", id: "G" },
    ]);

    setEvents([
      {
        id: 1,
        text: "Event 1",
        start: "2026-07-02T00:00:00",
        end: "2026-07-05T00:00:00",
        resource: "A",
      },
      {
        id: 2,
        text: "Event 2",
        start: "2026-07-03T00:00:00",
        end: "2026-07-10T00:00:00",
        resource: "C",
        barColor: "#38761d",
        barBackColor: "#93c47d",
      },
      {
        id: 3,
        text: "Event 3",
        start: "2026-07-02T00:00:00",
        end: "2026-07-08T00:00:00",
        resource: "D",
        barColor: "#f1c232",
        barBackColor: "#f1c232",
      },
      {
        id: 4,
        text: "Event 3",
        start: "2026-07-02T00:00:00",
        end: "2026-07-08T00:00:00",
        resource: "E",
        barColor: "#cc0000",
        barBackColor: "#ea9999",
      },
    ]);
  }, []);

  return (
    <div>
      <div className="space">
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="scheduler_default">Default</option>
          <option value="scheduler_green">Green</option>
          <option value="scheduler_white">White</option>
          <option value="scheduler_transparent">Transparent</option>
          <option value="scheduler_blue">Blue</option>
        </select>
      </div>

      <DayPilotScheduler
        ref={schedulerRef}
        timeHeaders={[{ groupBy: "Month" }, { groupBy: "Day", format: "d" }]}
        scale="Day"
        days={31}
        startDate={startDate}
        timeRangeSelectedHandling="Enabled"
        onTimeRangeSelected={onTimeRangeSelected}
        rowMarginTop={2}
        rowMarginBottom={2}
        rowHeaderWidth={120}
        theme={theme}
        resources={resources}
        events={events}
      />
    </div>
  );
};

export default Scheduler;
