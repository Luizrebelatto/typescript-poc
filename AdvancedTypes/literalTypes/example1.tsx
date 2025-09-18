type ButtonVariant = "primary" | "secondary" | "black";

interface ButtonProps {
  color: ButtonVariant;
  label: string;
}

function GenericButton({ color, label }: ButtonProps) {
  return <button className={`btn-${color}`}>{label}</button>;
}

<GenericButton color="primary" label="Save" />;
<GenericButton color="yellow" label="Save" />;
