"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface FilterBarProps {
  languages: string[]
  selectedLanguages: string[]
  onLanguageChange: (languages: string[]) => void
}

export function FilterBar({ languages, selectedLanguages, onLanguageChange }: FilterBarProps) {
  const toggleLanguage = (language: string) => {
    if (selectedLanguages.includes(language)) {
      onLanguageChange(selectedLanguages.filter((l) => l !== language))
    } else {
      onLanguageChange([...selectedLanguages, language])
    }
  }

  const clearFilters = () => {
    onLanguageChange([])
  }

  return (
    <div className="mt-4 pt-4 border-t border-gray-700">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-medium text-white">Filter by Language</h4>
        {selectedLanguages.length > 0 && (
          <Button variant="ghost" size="sm" onClick={clearFilters} className="text-gray-400 hover:text-white">
            Clear all
          </Button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {languages.map((language) => {
          const isSelected = selectedLanguages.includes(language)
          return (
            <Badge
              key={language}
              variant={isSelected ? "default" : "outline"}
              className={`cursor-pointer transition-colors ${
                isSelected
                  ? "bg-[#00C7B1] text-black hover:bg-[#00A693]"
                  : "border-gray-600 text-gray-400 hover:border-[#00C7B1] hover:text-[#00C7B1]"
              }`}
              onClick={() => toggleLanguage(language)}
            >
              {language}
              {isSelected && <X className="h-3 w-3 ml-1" />}
            </Badge>
          )
        })}
      </div>
    </div>
  )
}
