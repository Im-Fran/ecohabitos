import Link from "next/link"
import { Leaf } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-green-600" />
          <span className="font-medium">Ecohábitos</span>
          <span className="text-xs text-muted-foreground">Proyecto Código ágil</span>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Ecohábitos para Jóvenes. Todos los derechos reservados.
        </p>
        <div className="flex gap-4">
          <Link href="/acerca" className="text-sm text-muted-foreground hover:text-green-600">
            Acerca de
          </Link>
          <Link href="/contacto" className="text-sm text-muted-foreground hover:text-green-600">
            Contacto
          </Link>
          <Link href="/privacidad" className="text-sm text-muted-foreground hover:text-green-600">
            Privacidad
          </Link>
        </div>
      </div>
    </footer>
  )
}
