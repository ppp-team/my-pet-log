import { HTMLAttributes, useEffect, useRef, useState } from "react";
import VC, { Options } from "vanilla-calendar-pro";
import "vanilla-calendar-pro/build/vanilla-calendar.min.css";
import "./style.css";

interface VanillaCalendarProps extends HTMLAttributes<HTMLDivElement> {
  config?: Options;
}

function VanillaCalendar({ config, ...attributes }: VanillaCalendarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [calendar, setCalendar] = useState<VC | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    setCalendar(new VC(ref.current, config));
  }, [ref, config]);

  useEffect(() => {
    if (!calendar) return;
    calendar.init();
  }, [calendar]);

  return <div {...attributes} ref={ref}></div>;
}

export default VanillaCalendar;
