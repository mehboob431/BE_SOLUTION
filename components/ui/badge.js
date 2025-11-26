export default function Badge({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}) {
  const baseStyles = 'inline-block font-semibold rounded-full';

  const variants = {
    primary: 'bg-primary-100 text-primary-800',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    danger: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
    info: 'bg-blue-100 text-blue-800',
  };

  const sizes = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-2',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  return <span className={classes}>{children}</span>;
}