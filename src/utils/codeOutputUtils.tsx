export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function parseCommaList(value?: string): string[] {
    return (value ?? "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
}

export function inferPropType(prop: string): {
    type: string;
    defaultValue: string | null;
} {
    const lower = prop.toLowerCase();

    const startsWith = (prefix: string) => prop.startsWith(prefix);
    const lowerIncludes = (fragment: string) => lower.includes(fragment);
    const lowerStartsWith = (prefix: string) => lower.startsWith(prefix);

    switch (true) {
        case ["file"].some(lowerIncludes):
            return {
                type: "(file: File | null) => void",
                defaultValue: "() => {}",
            };

        case startsWith("on"):
            return { type: "() => void", defaultValue: "() => {}" };

        case startsWith("set"):
            return { type: "(value: string) => void", defaultValue: "() => {}" };

        case ["count", "age", "total", "number", "index"].some(lowerIncludes):
            return { type: "number", defaultValue: "0" };

        case ["is", "has", "should", "can", "disabled", "enabled"].some(lowerStartsWith):
            return { type: "boolean", defaultValue: "false" };

        case ["groups", "items", "list", "array"].some(lowerIncludes):
            return { type: "string[]", defaultValue: "[]" };

        case ["name", "title", "label", "text"].some(lowerIncludes):
            return { type: "string", defaultValue: '""' };

        // Handle specific cases for "value" and "placeholder"
        case startsWith("inputType"):
            return { type: "'input' | 'textarea'", defaultValue: null };

        default:
            return { type: "string", defaultValue: "undefined" };
    }
}
