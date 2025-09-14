type Props = {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, className }: Props) => {
  return (
    <button className={`bg-primary transition hover:bg-[#158ace] px-8 py-1 shadow-lg rounded-3xl text-white ${className || ''}`}>
      {children}
    </button>
  );
};

export default Button;
