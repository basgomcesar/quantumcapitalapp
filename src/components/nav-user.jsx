"use client";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { getLoans } from "@/lib/api/loansClient";
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function NavUser({ user }) {
  const router = useRouter();
  const { isMobile } = useSidebar();
  const [creditosAtrasados, setCreditosAtrasados] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleLogout = () => {
    Cookies.remove("authToken");
    Cookies.remove("userId");
    Cookies.remove("user");
    Cookies.remove("apellidos");
    Cookies.remove("email");
    router.push("/login");
  };
  useEffect(() => {
    async function fetchCreditos() {
      try {
        const loans = await getLoans();
        const atrasados = loans.filter((c) => c.idEstadoCredito === 2);
        setCreditosAtrasados(atrasados);
      } catch (err) {
        console.error("Error al obtener créditos:", err);
      }
    }
    fetchCreditos();
  }, []);
  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
                <ChevronsUpDown className="ml-auto size-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
              side={isMobile ? "bottom" : "right"}
              align="end"
              sideOffset={4}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{user.name}</span>
                    <span className="truncate text-xs">{user.email}</span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Sparkles />
                  Upgrade to Pro
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {/* Solo cambia el estado, no abre el modal directamente */}
                <DropdownMenuItem onClick={() => setModalOpen(true)}>
                  <Bell />
                  Notificaciones ({creditosAtrasados.length})
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>

      {/* Modal FUERA del menú */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Créditos Atrasados</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 max-h-[300px] overflow-y-auto">
            {creditosAtrasados.length > 0 ? (
              creditosAtrasados.map((c) => {
                const fecha = new Date(c.fechaHoraModificacion);
                const dia = fecha.getDate().toString().padStart(2, '0');
                const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
                const anio = fecha.getFullYear();
                const fechaFormateada = `${dia}/${mes}/${anio}`;
                return (
                  <div key={c.id} className="p-2 border rounded-lg shadow-sm">
                    <p className="font-semibold">{`Credito #${c.id}` || "Cliente desconocido"}</p>
                    <p className="text-sm text-muted-foreground">Monto pendiente: ${c.saldoPendiente}</p>
                    <p className="text-sm text-muted-foreground">
                      Fecha del ultimo movimiento: {fechaFormateada}
                    </p>
                  </div>
                );
              })
            ) : (
              <p className="text-sm text-muted-foreground">No hay créditos atrasados.</p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
