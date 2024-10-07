import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MoreHorizontal, Edit, Move, Package, Check, X, Plus, Barcode, Calendar, Sun, Moon, Upload, Link, Search, Home, ShoppingCart } from 'lucide-react'
import { useTheme } from "next-themes"

// Placeholder for Image component
const Image = ({ src, alt, width, height, className }) => (
  <img src={src} alt={alt} width={width} height={height} className={className} />
)

const InventoryManagement = () => {
  const [inventoryItems, setInventoryItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    // Set dark theme as default
    setTheme('dark')

    // Fetch inventory items from API (placeholder data)
    const items = [
      { 
        id: 1, 
        productName: 'JUUL Pod Classic Tobacco', 
        upc: '123456789012', 
        locations: { 'Warehouse 1': 100, 'Warehouse 2': 50 }, 
        lastUpdated: '2023-05-01', 
        lastReceived: '2023-04-15', 
        qtyReceived: 200, 
        lastSold: '2023-04-30', 
        qtySold: 50,
        vendor: {
          name: 'JUUL Labs, Inc.',
          address: '560 20th Street, San Francisco, CA 94107',
          contactInfo: 'support@juul.com'
        },
        imageUrl: '/placeholder.svg',
        notes: ''
      },
      // Add more items here...
    ]
    setInventoryItems(items)
    setFilteredItems(items)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
          <h1 className="text-2xl font-bold">Inventory Management</h1>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            Add Item
          </Button>
          <Button variant="outline">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Pick Item
          </Button>
          <Button onClick={toggleTheme} variant="outline" size="icon">
            {theme === 'light' ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </div>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>UPC</TableHead>
            <TableHead>Locations</TableHead>
            <TableHead>Last Updated</TableHead>
            <TableHead>Last Received</TableHead>
            <TableHead>QTY Received</TableHead>
            <TableHead>Last Sold</TableHead>
            <TableHead>QTY Sold</TableHead>
            <TableHead>Remaining Days</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.productName}</TableCell>
              <TableCell>{item.upc}</TableCell>
              <TableCell>
                {Object.entries(item.locations).map(([location, quantity]) => (
                  <div key={location}>{location}: {quantity}</div>
                ))}
              </TableCell>
              <TableCell>{item.lastUpdated}</TableCell>
              <TableCell>{item.lastReceived}</TableCell>
              <TableCell>{item.qtyReceived}</TableCell>
              <TableCell>{item.lastSold}</TableCell>
              <TableCell>{item.qtySold}</TableCell>
              <TableCell>Placeholder</TableCell>
              <TableCell>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-4 flex space-x-2">
        <Button>Generate Inventory Report</Button>
        <Button variant="outline">Initiate Audit</Button>
      </div>
    </div>
  )
}

export default InventoryManagement