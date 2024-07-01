"use client";
import React, { useState } from "react";
import Image from "next/image";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/Navbar";
import { cn } from "../../../utils/cn";
import Logo from '@/app/assets/57911.jpg'

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar />
    </div>
  );
}

function Navbar() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black shadow-input">
      <nav className="flex justify-between items-center px-4 py-1">
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="Company Logo"
            width={100}
            height={100}
        
            priority
          />
          <Menu setActive={setActive}>
          <div className="flex items-center">
            <MenuItem setActive={setActive} active={active} item="NEWS">
              <div className="flex flex-col space-y-2 text-sm">
                <HoveredLink href="/news">NEWS</HoveredLink>
                <HoveredLink href="/channellog">CHANNEL LOG</HoveredLink>
              </div>
            </MenuItem>
          </div>
          <MenuItem setActive={setActive} active={active} item="OVERVIEW">
            <div className="text-sm grid grid-cols-2 gap-6 p-2">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                description="Prepare for tech interviews like never before."
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="SUPPORT">
            <div className="flex flex-col space-y-2 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="COMMUNITY">
            <div className="flex flex-col space-y-2 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
        </div>
        <div className="flex space-x-2">
          <Button>Sign In</Button>
          <Button>Register</Button>
        </div>
      </nav>
    </div>
  );
}

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="inline-flex h-7 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer">
      <span className="relative z-20">{children}</span>
    </button>
  );
};

// MenuItem, Menu, ProductItem, and HoveredLink components remain unchanged

// MenuItem, Menu, ProductItem, and HoveredLink components remain unchanged
