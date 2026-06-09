"use client";

import {
  Bars,
  Bell,
  Envelope,
  Gear,
  House,
  Magnifier,
  Person,
} from "@gravity-ui/icons";

import { Button, Drawer } from "@heroui/react";

export function DashboardSidebar() {
  const navItems = [
    { icon: House, label: "Home" },
    { icon: Magnifier, label: "Search" },
    { icon: Bell, label: "Notifications" },
    { icon: Envelope, label: "Messages" },
    { icon: Person, label: "Profile" },
    { icon: Gear, label: "Settings" },
  ];

  const navContent = (
    <nav className="flex flex-col gap-2">
      {navItems.map((item) => (
        <button
          key={item.label}
          type="button"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm sm:text-base transition-colors hover:bg-default w-full text-left"
        >
          <item.icon className="w-5 h-5 shrink-0" />
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );

  return (
    <>
      <aside className="hidden lg:flex flex-col w-64 border-r min-h-screen p-4">
        {navContent}
      </aside>
      <div className="lg:hidden">
        <Drawer>
          <Drawer.Trigger asChild>
            <Button variant="secondary" className="flex items-center gap-2">
              <Bars className="w-5 h-5" />
              <span>Sidebar</span>
            </Button>
          </Drawer.Trigger>

          <Drawer.Backdrop>
            <Drawer.Content
              placement="left"
              className="w-[85vw] max-w-[320px] sm:max-w-[380px]"
            >
              <Drawer.Dialog>
                <Drawer.CloseTrigger />
                <Drawer.Header>
                  <Drawer.Heading>Navigation</Drawer.Heading>
                </Drawer.Header>
                <Drawer.Body>{navContent}</Drawer.Body>
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>
      </div>
    </>
  );
}