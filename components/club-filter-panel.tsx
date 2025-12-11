"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Filter, X } from "lucide-react"

export function ClubFilterPanel() {
  const [scoreRange, setScoreRange] = useState([70, 100])
  const [ageRange, setAgeRange] = useState([16, 35])

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Filter className="w-5 h-5" />
          Filtros Avançados
        </CardTitle>
        <Button variant="ghost" size="sm">
          <X className="w-4 h-4 mr-1" />
          Limpar
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="sport">Modalidade</Label>
          <Select>
            <SelectTrigger id="sport">
              <SelectValue placeholder="Todas as modalidades" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="futebol">Futebol</SelectItem>
              <SelectItem value="basquete">Basquete</SelectItem>
              <SelectItem value="volei">Vôlei</SelectItem>
              <SelectItem value="futsal">Futsal</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="position">Posição</Label>
          <Select>
            <SelectTrigger id="position">
              <SelectValue placeholder="Todas as posições" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="atacante">Atacante</SelectItem>
              <SelectItem value="meio">Meio-campo</SelectItem>
              <SelectItem value="zagueiro">Zagueiro</SelectItem>
              <SelectItem value="goleiro">Goleiro</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label>
            MatchScore: {scoreRange[0]} - {scoreRange[1]}
          </Label>
          <Slider value={scoreRange} onValueChange={setScoreRange} min={0} max={100} step={5} className="w-full" />
        </div>

        <div className="space-y-3">
          <Label>
            Idade: {ageRange[0]} - {ageRange[1]} anos
          </Label>
          <Slider value={ageRange} onValueChange={setAgeRange} min={13} max={40} step={1} className="w-full" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="country">País</Label>
          <Select>
            <SelectTrigger id="country">
              <SelectValue placeholder="Todos os países" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="br">Brasil</SelectItem>
              <SelectItem value="ar">Argentina</SelectItem>
              <SelectItem value="pt">Portugal</SelectItem>
              <SelectItem value="es">Espanha</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="height">Altura mínima (cm)</Label>
          <Input id="height" type="number" placeholder="170" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="weight">Peso (kg)</Label>
          <div className="grid grid-cols-2 gap-2">
            <Input id="weight-min" type="number" placeholder="Min" />
            <Input id="weight-max" type="number" placeholder="Max" />
          </div>
        </div>

        <Button className="w-full bg-gradient-to-r from-primary to-orange-500">Aplicar Filtros</Button>
      </CardContent>
    </Card>
  )
}
