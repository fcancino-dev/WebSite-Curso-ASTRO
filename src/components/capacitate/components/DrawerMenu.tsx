import * as React from "react";
import { Home, User, Settings, LogOut } from "lucide-react"; // Íconos opcionales
import { IconMenu2 } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function DrawerMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Drawer
      direction="right"
      open={isOpen}
      onOpenChange={setIsOpen}
      dismissible={false}
    >
      <DrawerTrigger asChild>
        <Button variant="link" onClick={() => setIsOpen(true)}>
          <IconMenu2
            stroke={3}
            className="w-8 h-8 text-[#b6b6b6] hover:text-white"
          />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-full ml-[800px] rounded">
        <div className="mx-auto w-full max-w-md">
          <DrawerHeader className="text-black  ">
            <DrawerTitle className="text-3xl">DevCloud</DrawerTitle>
          </DrawerHeader>

          {/* Opciones de navegación */}
          <nav className="space-y-2 mt-4 text-black ">
            <Button variant="ghost" className="w-full justify-start text-2xl">
              <a href="/">Inicio</a>
            </Button>
            <Button variant="ghost" className="w-full justify-start text-2xl">
              <a href="/capacitate">Capacítate</a>
            </Button>
          </nav>

          {/* Footer del Drawer */}
          <DrawerFooter className="mt-4 w-fit">
            <DrawerClose asChild>
              <Button
                variant="link"
                onClick={() => setIsOpen(false)}
                className="text-2xl"
              >
                X Cerrar
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerMenu;
