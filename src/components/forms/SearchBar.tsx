export function SearchBar({
  onChange,
  value,
  placeholder,
}: {
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
}) {
  return (
    <div>
      <input
        type="text"
        className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
