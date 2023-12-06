export default function Button({ children, styles }, { ...props }) {
  return (
    <button className={`${styles} button`} {...props}>
      {children}
    </button>
  );
}
