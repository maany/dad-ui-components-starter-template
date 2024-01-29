interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const classes = ["font-bold border-0 rounded-full cursor-pointer inline-block leading-none"].join(' ')
  return (
    <button
      type="button"
      className={classes}
      style={{ backgroundColor }}
      {...props}
    >
      <span className='font-bold underline'>{label}</span>
    </button>
  );
};
