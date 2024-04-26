interface Props {
  children: React.ReactNode;
  style: string;
}

export function H1(props: Props) {
  const { children, style } = props;

  return (
    <h1 className={`text-3xl text-gray-900 font-bold dark:text-white ${style}`}>
      {children}
    </h1>
  );
}

export function H2(props: Props) {
  const { children, style } = props;

  return (
    <h2 className={`text-2xl text-gray-900 font-bold dark:text-white ${style}`}>
      {children}
    </h2>
  );
}

export function H3(props: Props) {
  const { children, style } = props;

  return (
    <h3 className={`text-xl text-gray-900 font-bold dark:text-white ${style}`}>
      {children}
    </h3>
  );
}

export function H4(props: Props) {
  const { children, style } = props;

  return (
    <h4 className={`text-lg text-gray-900 font-bold dark:text-white ${style}`}>
      {children}
    </h4>
  );
}

export function H5(props: Props) {
  const { children, style } = props;

  return (
    <h5
      className={`text-base text-gray-900 font-bold dark:text-white ${style}`}
    >
      {children}
    </h5>
  );
}

export function H6(props: Props) {
  const { children, style } = props;

  return (
    <h6 className={`text-sm text-gray-900 font-bold dark:text-white ${style}`}>
      {children}
    </h6>
  );
}
