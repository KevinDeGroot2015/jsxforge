export function parseCommaList(value?: string): string[] {
    return (value ?? "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
}

export function inferPropType(prop: string): string {
    if (prop.startsWith("on")) return "() => void";
    if (prop.startsWith("set")) return "(value: any) => void";
    if (["count", "age", "total", "number", "index"].some(k => prop.toLowerCase().includes(k))) return "number";
    if (["name", "title", "label", "text"].some(k => prop.toLowerCase().includes(k))) return "string";
    return "any";
}
