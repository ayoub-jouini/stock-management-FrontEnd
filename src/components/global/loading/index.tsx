interface Props {}
export default function Loading(props: Props) {
  const {} = props;
  return (
    <div className="bg-black bg-opacity-5 fixed w-full h-full top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <div
        className="h-24 w-24 animate-spin rounded-full border-8 border-solid border-indigo-600 border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status"
      ></div>
    </div>
  );
}
