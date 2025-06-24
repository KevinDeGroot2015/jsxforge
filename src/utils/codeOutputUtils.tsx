export function parseCommaList(value?: string): string[] {
    return (value ?? "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
}

export function inferPropType(prop: string): {
    type: string;
    defaultValue: string;
} {
    const lower = prop.toLowerCase();

    if (prop.startsWith("on"))
        return { type: "() => void", defaultValue: "() => {}" };
    if (prop.startsWith("set"))
        return { type: "(value: string) => void", defaultValue: "() => {}" };
    if (
        ["count", "age", "total", "number", "index"].some((k) =>
            lower.includes(k)
        )
    ) {
        return { type: "number", defaultValue: "0" };
    }
    if (["is", "has", "should", "can"].some((k) => lower.startsWith(k))) {
        return { type: "boolean", defaultValue: "false" };
    }
    if (["groups", "items", "list", "array"].some((k) => lower.includes(k))) {
        return { type: "string[]", defaultValue: "[]" };
    }
    if (["name", "title", "label", "text"].some((k) => lower.includes(k))) {
        return { type: "string", defaultValue: '""' };
    }

    return { type: "string", defaultValue: "undefined" };
}
