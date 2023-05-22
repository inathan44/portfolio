type CircleProps = {
  size: number;
  color: string;
};

const CircleIcon = (props: CircleProps) => {
  const { size, color } = props;

  return (
    <svg height={size} width={size}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2}
        stroke='black'
        stroke-width='0'
        fill={color}
      />
    </svg>
  );
};

export default CircleIcon;
