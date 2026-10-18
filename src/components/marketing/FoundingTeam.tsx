import styles from "./FoundingTeam.module.css";

const founders = [
  { name: "Sahil", initial: "S", role: "Founder" },
  {
    name: "Mangala Sawant",
    initial: "M",
    role: "Co-founder · Marketing & Sales",
  },
  { name: "Pavan Babar", initial: "P", role: "Co-founder · Technology" },
];

export default function FoundingTeam() {
  return (
    <ul className={styles.roster} aria-label="NexaWorks founding team">
      {founders.map((founder) => (
        <li className={styles.person} key={founder.name}>
          <span className={styles.initial} aria-hidden="true">
            {founder.initial}
          </span>
          <div>
            <strong className={styles.name}>{founder.name}</strong>
            <span className={styles.role}>{founder.role}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
