type FormFieldProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
};

export default function FormField({
    label,
    value,
    onChange,
    placeholder,
}: FormFieldProps) {
    return (
        <div className="space-y-2">
            <label className="block text-slate-700 font-medium">{label}</label>
            <input
                className="border border-slate-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
        </div>
    );
}
