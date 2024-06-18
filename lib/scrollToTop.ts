'use client'
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const useScrollToTop = () => {
const path=usePathname()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
};

export default useScrollToTop;
