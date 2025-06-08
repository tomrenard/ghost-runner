import styles from "./form-message.module.css";

export type Message = {
  type: "error" | "success";
  content: string;
};

export function FormMessage(props: { message?: Message }) {
  const { message } = props;

  if (!message) {
    return null;
  }

  const { type, content } = message;

  return (
    <div
      className={`${styles.container} ${
        type === "error" ? styles.error : styles.success
      }`}
    >
      <p className={styles.text}>{content}</p>
    </div>
  );
}
