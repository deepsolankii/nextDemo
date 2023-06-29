import { useTheme } from "styled-components";

const CancelIcon = () => {
  const theme = useTheme();

  return (
    <svg
      fill={theme.palette.common.white}
      aria-hidden='true'
      viewBox='0 0 24 24'
    >
      <path d='M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z'></path>
    </svg>
  );
};

export default CancelIcon;
