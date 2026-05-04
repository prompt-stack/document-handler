interface buttonProps {
  type?: "submit" | "button";
  label: string;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

const ReusableButton = ({type, label, onClickHandler, className} : buttonProps) => {
    return (
    <div>
        <button
        type={type}
        className={className}
        onClick={onClickHandler}
        >
        {label}
        </button>
    </div>
  )
}

export default ReusableButton
