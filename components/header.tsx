'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ChevronDown } from 'lucide-react';

// Define your navigation links here.
// Adjust the names and hash values as needed.
const links = [
  { name: 'Home', hash: '#hero' },
  { name: 'About', hash: '#about' },
  { name: 'Projects', hash: '#projects' },
  { name: 'Contact', hash: '#contact' },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-5 z-20 my-5 flex items-center justify-center sm:top-10 sm:my-10">
      {/* This inline container will only take up the space it needs */}
      <div className="inline-flex items-center gap-2 sm:bg-gray-100 dark:sm:bg-stone-900 sm:bg-opacity-80 sm:rounded-full sm:px-8 sm:py-3 sm:backdrop-blur-sm">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="secondary" size="lg" className="sm:hidden">
              Menu <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-screen text-gray-600 dark:text-gray-400">
            <DialogHeader>
              <DialogTitle className="text-md self-start font-medium">
                Navigation
              </DialogTitle>
            </DialogHeader>
            <nav>
              <ul>
                {links.map(({ name, hash }) => (
                  <li
                    key={name}
                    onClick={() => setOpen(false)}
                    className="py-3 text-sm border-b border-gray-200 dark:border-gray-700 last:border-0"
                  >
                    <Link className="block" href={hash}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </DialogContent>
        </Dialog>

        <nav className="hidden text sm:block text-gray-600 dark:text-gray-400 font-medium">
          <ul className="flex gap-10">
            {links.map(({ name, hash }) => (
              <li key={name}>
                <Link
                  href={hash}
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
