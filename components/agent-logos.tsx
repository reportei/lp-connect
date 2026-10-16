// The agents the provisioning prompt is written for, each on its brand colour, as the app shows them.
export const AGENTS = [
  { name: "Claude Code", icon: "claude", background: "#D14D24" },
  { name: "Cursor", icon: "cursor", background: "#0A0F12" },
  { name: "Codex", icon: "codex", background: "#3941FF" },
  { name: "OpenClaw", icon: "openclaw", background: "#FF4D4D" },
  { name: "Grok", icon: "grok", background: "#000000" },
]

export function AgentLogos({ withNames = false }: { withNames?: boolean }) {
  return (
    <ul className="flex flex-wrap items-center gap-2">
      {AGENTS.map((agent) => (
        <li
          key={agent.icon}
          className={withNames ? "flex items-center gap-2 rounded-md border bg-white py-1 pl-1 pr-3" : ""}
          title={agent.name}
        >
          <span
            className="flex size-7 items-center justify-center rounded-lg"
            style={{ background: agent.background }}
          >
            <img src={`/images/agents/${agent.icon}.svg`} alt={withNames ? "" : agent.name} className="size-4" />
          </span>
          {withNames && <span className="text-sm font-medium">{agent.name}</span>}
        </li>
      ))}
    </ul>
  )
}
