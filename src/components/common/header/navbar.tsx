"use client";

import { cn } from "@/lib/utils";
import { ExternalLink, Menu, Microscope, Zap } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  className?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    signup: {
      title: string;
      url: string;
      icon?: React.ReactNode;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "/",
    src: "/logo.png",
    alt: "logo",
    title: "GSO",
  },
  menu = [
    { title: "Home", url: "#" },
    { title: "About Us", url: "#about" },
    {
      title: "Events",
      url: "#events",
      items: [
        {
          title: "1st NGSO",
          description: "National Legacy Event",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#first",
        },
        {
          title: "2nd IGSO",
          description: "International Championship",
          icon: <Microscope className="size-5 shrink-0" />,
          url: "#second",
        },
      ],
    },
    { title: "Media & Partners", url: "#media" },
  ],
  auth = {
    signup: {
      title: "Register Now",
      url: "https://sciencebaze.com/direct-reg/second-igso",
      icon: <ExternalLink className="size-5 shrink-0" />,
    },
  },
  className,
}: Navbar1Props) => {
  return (
    <section className={cn("py-0", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop */}
        <nav className="hidden items-center justify-between lg:flex">
          {/* Logo */}
          <a href={logo.url} className="flex items-center gap-2">
            <img src={logo.src} className="max-h-24" alt={logo.alt} />
          </a>

          {/* Menu */}
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {menu.map((item) => renderMenuItem(item))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA */}
          <Button
            asChild
            className="bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 font-bold hover:from-teal-600 hover:to-cyan-500"
          >
            <a href={auth.signup.url} target="_blank">
              {auth.signup.title}
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </nav>

        {/* Mobile */}
        <div className="lg:hidden flex items-center justify-between">
          <a href={logo.url}>
            <img src={logo.src} className="max-h-8" alt={logo.alt} />
          </a>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle>{logo.title}</SheetTitle>
              </SheetHeader>

              <Accordion type="single" collapsible className="mt-6 space-y-4">
                {menu.map((item) => renderMobileMenuItem(item))}
              </Accordion>

              <Button asChild className="mt-6 w-full">
                <a href={auth.signup.url}>{auth.signup.title}</a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
};

const baseMenuClass =
  "inline-flex h-10 items-center rounded-md px-4 text-sm font-medium text-white transition hover:bg-primary/10";

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger
          className="!bg-transparent !focus-visible:bg-transparent !data-[state=open]:bg-transparent !text-white"

        >
          {item.title}
        </NavigationMenuTrigger>



        <NavigationMenuContent className="text-black backdrop-blur-md">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title}>
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem >
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink href={item.url} className={baseMenuClass}>
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title}>
        <AccordionTrigger>{item.title}</AccordionTrigger>
        <AccordionContent className="space-y-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a className="flex min-w-80 flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground group" href={item.url} >
      <div className="group-hover:text-primary/70">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold group-hover:text-primary">{item.title}</div>
        {item.description &&
          (<p className="text-sm leading-snug text-muted-foreground"> {item.description} </p>)
        }
      </div>
    </a>
  )
};

export { Navbar1 };
