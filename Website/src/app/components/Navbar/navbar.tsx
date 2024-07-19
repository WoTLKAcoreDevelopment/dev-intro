'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/Navbar";
import { cn } from "../../../../utils/cn";
import Logo from '@/app/assets/Navbar_Logo.png' // Adjust the path to your logo
import Image from 'next/image';
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black shadow-input">
      <nav className="flex justify-between items-center px-4 py-1">
        {/* Logo */}
        <div className="flex items-center">
          <Link href='/' passHref>
            <Image
              src={Logo}
              alt="Company Logo"
              width={100}
              height={100}
            />
          </Link>
          <Menu setActive={setActive}>
            {/* Menu Items */}
            <MenuItem setActive={setActive} active={active} item="NEWS">
              <div className="flex flex-col space-y-2 text-sm">
                <HoveredLink href="/news">NEWS</HoveredLink>
                <HoveredLink href="/channellog">CHANNEL LOG</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="SHOP">
              <div className="">
                {/* Content for SHOP */}
                <ProductItem
                  title="Transmog Shop"
                  href="/transmog/shop"
                  src='https://i.pinimg.com/736x/c0/09/99/c00999f27e1b935420ce6c04622f6c62.jpg' // Adjust the path to your image
                  description="Look your best even when covered in Blood"
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="SUPPORT">
              <div className="flex flex-col space-y-2 text-sm">
                <HoveredLink href="/help">Help</HoveredLink>
                <HoveredLink href="/server-info">Server Status</HoveredLink>
                <HoveredLink href="/bug-tracker">Bug Tracker</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="COMMUNITY">
              <div className="flex flex-col space-y-2 text-sm font-bold">
                <HoveredLink href="https://discord.gg/Pe6fkDZ8">Discord</HoveredLink>
                <HoveredLink href="/forum">Forum</HoveredLink>
                <HoveredLink href="/dev-team">Team</HoveredLink>
                <HoveredLink href="/leaderboards">Leaderboards</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>
        {/* Sign In and Register Buttons */}
        <div className="flex space-x-2">
          <Link href='/signin'>
            <button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
              Sign In
            </button>
          </Link>
          <Link href='/create-account'>
            <button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
              Register
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
