'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { BsMoon, BsSun } from 'react-icons/bs';
import { Button } from './styles';

export const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const changeTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button onClick={changeTheme}>
      {resolvedTheme === 'dark' ? <BsSun size={18} /> : <BsMoon size={18} />}
    </Button>
  );
};
