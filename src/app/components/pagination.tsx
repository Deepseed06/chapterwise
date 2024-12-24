"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  totalItems: number
  itemsPerPage: number
  onPageChange: (page: number) => void
}

export default function Pagination({ totalItems, itemsPerPage, onPageChange }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    onPageChange(page)
  }

  const renderPageNumbers = () => {
    const pageNumbers = []
    const maxVisiblePages = 5

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)
    // let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Button
          key={i}
          variant={i === currentPage ? "default" : "outline"}
          onClick={() => handlePageChange(i)}
          aria-current={i === currentPage ? "page" : undefined}
          className="w-10 h-10"
        >
          {i}
        </Button>
      )
    }

    return pageNumbers
  }

  return (
    <nav className="flex justify-center items-center space-x-2" aria-label="Pagination">
      <Button
        variant="outline"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 p-0"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      {renderPageNumbers()}
      <Button
        variant="outline"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 p-0"
        aria-label="Next page"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </nav>
  )
}

