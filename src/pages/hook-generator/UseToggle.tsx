import PageBase from "@components/PageBase/PageBase";

export default function UseToggle() {
    const returnCode = `export function useToggle(initial = false): [boolean, () => void, (v: boolean) => void] {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue(v => !v), []);
  
  return [value, toggle, setValue];
}
  
// Usage example:
const [isToggled, toggle, setToggle] = useToggle();`;

    return (
        <PageBase headerCode={returnCode} showAssets={false}/>
    );
}
