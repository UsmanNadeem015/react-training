import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react"
import axios, { isCancel, AxiosError } from 'axios';

export default function Products() {
  const [products, setProducts] = useState([])
  const getProducts= async() => {
    const  response = await axios.get('https://fakestoreapi.com/products')
    setProducts(response.data)
  }
  
useEffect(()=>{
//   fetch('https://fakestoreapi.com/products')
//   .then(response => response.json())
//   .then(data => setProducts(data));

getProducts()





  },[]
)
  
  return (
    <div className="rounded-md border p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20">ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="h-24 text-center">
                No products found.
              </TableCell>
            </TableRow>
          ) : (
            products.map((product) => (
              <TableRow key={product.id}>

                {/* ID  */}
                <TableCell className="font-medium">
                    {product.id}
                </TableCell>
                
                {/* Title  */}
                <TableCell className="max-w-75 truncate">
                  {product.title}
                </TableCell>
                
                {/* Category  */}
                <TableCell className="capitalize">
                    {product.category}
                </TableCell>
                
                {/* price  */}
                <TableCell className="text-right">
                    ${product.price?.toFixed(2)}
                </TableCell>
                
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}