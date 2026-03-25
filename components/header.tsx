"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/images/reportei-connect-logo.png" alt="Reportei Connect" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/#what-is" className="text-sm font-medium hover:text-primary transition-colors">
              O que é
            </a>
            <a href="/#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              Como funciona
            </a>
            <a href="/#networks" className="text-sm font-medium hover:text-primary transition-colors">
              Redes
            </a>
            <a href="/#case-study" className="text-sm font-medium hover:text-primary transition-colors">
              Cases
            </a>
            <Link href="/documentacao" className="text-sm font-medium hover:text-primary transition-colors">
              Documentação
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/teste-gratuito">Teste Gratuitamente</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-4 space-y-4">
            <a href="/#what-is" className="block text-sm font-medium hover:text-primary transition-colors">
              O que é
            </a>
            <a href="/#how-it-works" className="block text-sm font-medium hover:text-primary transition-colors">
              Como funciona
            </a>
            <a href="/#networks" className="block text-sm font-medium hover:text-primary transition-colors">
              Redes
            </a>
            <a href="/#case-study" className="block text-sm font-medium hover:text-primary transition-colors">
              Cases
            </a>
            <Link href="/documentacao" className="block text-sm font-medium hover:text-primary transition-colors">
              Documentação
            </Link>
            <div className="pt-4">
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/teste-gratuito">Teste Gratuitamente</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
