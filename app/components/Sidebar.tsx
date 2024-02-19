import Link from "next/link";

const sections = [
  {
    label: "Dialog",
    id: "dialog",
  },
  {
    label: "Accordion",
    id: "accordion",
  },
  {
    label: "Alert",
    id: "alert",
  },
  {
    label: "Collapsible",
    id: "collapsible",
  },
  {
    label: "Dropdown Menu",
    id: "dropdown-menu",
  },
  {
    label: "Popover",
    id: "popover",
  },
];

export const Sidebar = () => {
  return (
    <aside>
      <nav className="p-4">
        <div className="flex flex-col gap-2">
          <h2 className="">Components</h2>
          <ul className="">
            {sections.map((section) => (
              <li key={section.id}>
                <Link className="font-semibold" href={`#${section.id}`}>
                  {section.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};
