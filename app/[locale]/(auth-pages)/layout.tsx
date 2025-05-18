import styles from "./layout.module.css";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.container}>{children}</div>;
}
