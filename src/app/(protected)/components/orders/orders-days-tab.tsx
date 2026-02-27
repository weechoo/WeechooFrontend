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
    <div className="border-b border-gray-200">
      <nav className="flex space-x-8">
        {availableDays.map((day) => (
          <button
            key={day}
            onClick={() => onDayChange(day)}
            className={`
              py-2 px-1 border-b-2 font-medium text-sm transition-colors
              ${
                selectedDayName === day
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
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
