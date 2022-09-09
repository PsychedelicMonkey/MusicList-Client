type Props = {
  className?: string;
  link: string;
  children: JSX.Element | string;
};

const IconLink = ({ className, link, children }: Props) => {
  return (
    <li>
      <a href={link} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    </li>
  );
};

export default IconLink;
