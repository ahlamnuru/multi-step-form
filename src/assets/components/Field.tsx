type FieldProps = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

function Field({ id, label, type, placeholder, value, error, onChange }: FieldProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-sm text-blue-950">
          {label}
        </label>
        {error && <p className="text-sm font-bold text-red-500">{error}</p>}
      </div>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-2 w-full rounded-lg border px-4 py-3 font-medium text-blue-950 outline-none placeholder:text-grey-500 hover:border-purple-600 focus-visible:border-purple-600 ${
          error ? "border-red-500" : "border-purple-200"
        }`}
      />
    </div>
  );
}

export default Field;
