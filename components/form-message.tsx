import styles from "./form-message.module.css";

export type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export function FormMessage({ message }: { message: Message }) {
  return (
    <div className={styles.container}>
      {"success" in message && (
        <div className={`${styles.message} ${styles.success}`}>
          {message.success}
        </div>
      )}
      {"error" in message && (
        <div className={`${styles.message} ${styles.error}`}>
          {message.error}
        </div>
      )}
      {"message" in message && (
        <div className={`${styles.message} ${styles.info}`}>
          {message.message}
        </div>
      )}
    </div>
  );
}
