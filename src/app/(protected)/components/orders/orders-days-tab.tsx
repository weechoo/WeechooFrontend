interface DayTabsProps {
  availableDays: Array<
    "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday"
  >;
  selectedDayName: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
  onDayChange: (
    dayName: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday",
  ) => void;
}

export const DayTabs = ({
  availableDays,
  selectedDayName,
  onDayChange,
}: DayTabsProps) => {
  return (
    <div>
      <nav className="flex space-x-8">
        {availableDays.map((day) => (
          <button
            key={day}
            onClick={() => onDayChange(day)}
            className={`
              py-2 px-1 font-medium text-sm cursor-pointer transition-colors
              ${
                selectedDayName === day
                  ? "text-neutral-black font-bold"
                  : "text-neutral-100"
              }
            `}
          >
            {day}
          </button>
        ))}
      </nav>
    </div>
  );
};
