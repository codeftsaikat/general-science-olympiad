'use client';

import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ChevronDown, ChevronRight, ChevronUp, ExternalLink, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#mission' },
    {
      label: 'Events',
      items: [
        {
          label: '1st NGSO',
          description: 'National Legacy Event',
          href: '#first',
          badge: null
        },
        {
          label: '2nd IGSO',
          description: 'International Championship',
          href: '#second',
          badge: 'Live'
        }
      ]
    },
    { label: 'Media & Partners', href: '#media' },
  ];

  const handleEventClick = () => {
    setEventsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-slate-900/50 backdrop-blur-xl shadow-lg border-teal-500/20'
        : 'bg-slate-900/60 backdrop-blur-md'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="GSO Logo"
                className="h-16 md:h-24 w-auto object-contain filter group-hover:brightness-110 transition-all"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {!item.items ? (
                      <a href={item.href}>
                        <NavigationMenuLink
                          className={`${navigationMenuTriggerStyle()} bg-transparent text-slate-50 hover:text-primary hover:bg-primary/10`}
                        >
                          {item.label}
                        </NavigationMenuLink>
                      </a>
                    ) : (
                      <div className="relative group py-4">
                        <button
                          className="flex items-center gap-1 text-slate-50 hover:text-teal-400 focus:outline-none transition-colors px-4 py-2 rounded-md hover:bg-slate-800/50"
                          onMouseEnter={() => setEventsOpen(true)}
                          onMouseLeave={() => setEventsOpen(false)}
                        >
                          Events
                          {eventsOpen ? (
                            <ChevronUp size={16} className="transition-transform" />
                          ) : (
                            <ChevronDown size={16} className="transition-transform" />
                          )}
                        </button>
                        <div
                          className="absolute left-1/2 -translate-x-1/2 top-full w-64 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2"
                          onMouseEnter={() => setEventsOpen(true)}
                          onMouseLeave={() => setEventsOpen(false)}
                        >
                          <a
                            href="#first"
                            className="block px-4 py-3 rounded-md hover:bg-slate-50 transition-colors"
                            onClick={handleEventClick}
                          >
                            <span className="block text-slate-900 font-bold">
                              1st NGSO
                            </span>
                            <span className="block text-xs text-slate-500 mt-0.5">
                              National Legacy Event
                            </span>
                          </a>
                          <a
                            href="#second"
                            className="block px-4 py-3 rounded-md hover:bg-slate-50 transition-colors"
                            onClick={handleEventClick}
                          >
                            <span className="block text-teal-700 font-bold">
                              2nd IGSO{' '}
                              <span className="ml-2 text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded border border-green-200 uppercase">
                                Live
                              </span>
                            </span>
                            <span className="block text-xs text-slate-500 mt-0.5">
                              International Championship
                            </span>
                          </a>
                        </div>
                      </div>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Register Button */}
            <Button
              asChild
              className="relative overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 font-bold hover:from-teal-600 hover:to-cyan-500 hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300"
            >
              <a
                href="https://sciencebaze.com/direct-reg/second-igso"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Register Now
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-50 hover:text-teal-400 hover:bg-slate-800/50"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:max-w-md bg-slate-900 border-l border-teal-500/20 p-0 overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-teal-500/10">
                  <a
                    href="#"
                    className="flex items-center gap-3"
                    onClick={() => setOpen(false)}
                  >
                    <img
                      src="/logo.png"
                      alt="GSO Logo"
                      className="h-10 w-auto object-contain transition-all"
                    />

                  </a>
                  {/* <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-slate-50 hover:text-teal-400 hover:bg-slate-800/50"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose> */}
                </div>

                {/* Navigation Items */}
                <div className="flex-1 px-6 py-8">
                  <nav className="space-y-6">
                    {navItems.map((item) => (
                      <div key={item.label}>
                        {!item.items ? (
                          <a
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-between py-3 text-lg font-medium text-slate-50 hover:text-teal-400 transition-colors"
                          >
                            {item.label}
                            <ChevronRight className="h-4 w-4" />
                          </a>
                        ) : (
                          <div className="space-y-4">
                            <div className="flex items-center justify-between py-3">
                              <span className="text-lg font-medium text-slate-50">
                                {item.label}
                              </span>
                              <ChevronDown className="h-4 w-4 text-cyan-400" />
                            </div>
                            <div className="space-y-3 pl-4 border-l border-teal-500/20">
                              {item.items.map((subItem) => (
                                <a
                                  key={subItem.label}
                                  href={subItem.href}
                                  onClick={() => setOpen(false)}
                                  className="block rounded-lg p-3 hover:bg-slate-800/50 transition-colors group"
                                >
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="font-medium text-slate-50 group-hover:text-teal-400">
                                      {subItem.label}
                                    </span>
                                    {subItem.badge && (
                                      <span className="inline-flex items-center rounded-full border border-teal-500/30 bg-gradient-to-r from-teal-500 to-cyan-400 px-2 py-0.5 text-xs font-medium text-slate-900">
                                        {subItem.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-sm text-cyan-400">
                                    {subItem.description}
                                  </p>
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>

                {/* Footer */}
                <div className="border-t border-teal-500/10 p-6 space-y-6">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 font-bold hover:from-teal-600 hover:to-cyan-500 hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300"
                  >
                    <a
                      href="https://sciencebaze.com/direct-reg/second-igso"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-center gap-2"
                    >
                      Register Now
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>

                  <div className="space-y-4">
                    <div className="text-xs uppercase font-semibold tracking-wider text-cyan-400">
                      Contact Information
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-50">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-teal-500/10 to-cyan-400/10">
                        <svg
                          className="h-5 w-5 text-teal-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <span>info@sciencebaze.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Header;