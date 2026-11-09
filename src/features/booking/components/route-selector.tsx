
type SelectorOption<T extends string> = {
  value: T;
  label: string;
};

type RouteSelectorProps<T extends string> = {
  legend: string;
  name: string;
  value: T;
  options: ReadonlyArray<SelectorOption<T>>;
  onChange: (value: T) => void;
  compact?: boolean;
};

export function RouteSelector<T extends string>({
  legend,
  name,
  value,
  options,
  onChange,
  compact = false,
}: RouteSelectorProps<T>) {
  return (
    <fieldset>
      <legend className={compact ? "mb-2 text-sm font-extrabold text-[#24344d]" : "sr-only"}>
        {legend}
      </legend>
      <div className={`grid grid-cols-2 gap-2 rounded-full bg-[#f4f6f9] ${compact ? "rounded-xl bg-transparent p-0" : "p-1"}`}>
        {options.map((option) => (
          <label key={option.value} className="cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="peer sr-only"
            />
            <span className={`flex min-h-11 items-center justify-center px-3 text-center text-sm font-black transition-[background-color,color,box-shadow,border-color] peer-focus-visible:outline peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--focus-ring)] ${
              compact
                ? "rounded-xl border border-[var(--border-soft)] bg-white text-[var(--text-muted)] peer-checked:border-[var(--brand-accent)] peer-checked:bg-[var(--accent-soft)] peer-checked:text-[var(--brand-accent-dark)]"
                : "rounded-full text-[var(--text-muted)] peer-checked:bg-[#07172f] peer-checked:text-white peer-checked:shadow-sm"
            }`}>
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
