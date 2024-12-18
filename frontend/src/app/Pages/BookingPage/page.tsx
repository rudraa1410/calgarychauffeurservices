"use client"
import { useState } from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const availableCars = [
  { id: 1, name: "Luxury Sedan", price: 100, image: "/placeholder.svg?height=200&width=300", premium: false },
  { id: 2, name: "Sports Car", price: 150, image: "/placeholder.svg?height=200&width=300", premium: true },
  { id: 3, name: "SUV", price: 120, image: "/placeholder.svg?height=200&width=300", premium: false },
  { id: 4, name: "Electric Vehicle", price: 130, image: "/placeholder.svg?height=200&width=300", premium: true },
  { id: 5, name: "Convertible", price: 140, image: "/placeholder.svg?height=200&width=300", premium: true },
  { id: 6, name: "Compact Car", price: 80, image: "/placeholder.svg?height=200&width=300", premium: false },
]

const locations = [
  "New York", "Los Angeles", "Chicago", "San Francisco", "Miami", "Boston", "Houston", "Dallas"
]

export default function BookingPage() {
  const [showCars, setShowCars] = useState(false)
  const [pickupDate, setPickupDate] = useState('')
  const [pickupTime, setPickupTime] = useState('')
  const [dropoffDate, setDropoffDate] = useState('')
  const [dropoffTime, setDropoffTime] = useState('')
  
  // For handling location input and suggestions
  const [pickupLocation, setPickupLocation] = useState('')
  const [dropoffLocation, setDropoffLocation] = useState('')
  const [pickupSuggestions, setPickupSuggestions] = useState<string[]>([])
  const [dropoffSuggestions, setDropoffSuggestions] = useState<string[]>([])

  // Handle location search and filter suggestions
  const handleLocationChange = (type: 'pickup' | 'dropoff', value: string) => {
    if (type === 'pickup') {
      setPickupLocation(value)
      setPickupSuggestions(locations.filter(location => location.toLowerCase().includes(value.toLowerCase())))
    } else {
      setDropoffLocation(value)
      setDropoffSuggestions(locations.filter(location => location.toLowerCase().includes(value.toLowerCase())))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowCars(true)
  }

  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Lucky Car Booking</h1>
      
      <Card className="mb-8">
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pickup">Pickup Location</Label>
                <Input
                  id="pickup"
                  value={pickupLocation}
                  onChange={(e) => handleLocationChange('pickup', e.target.value)}
                  placeholder="Enter pickup location"
                  required
                />
                {pickupSuggestions.length > 0 && (
                  <div className="absolute bg-white border shadow-lg mt-2 w-full">
                    {pickupSuggestions.map((location, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => setPickupLocation(location)}
                      >
                        {location}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="dropoff">Drop-off Location</Label>
                <Input
                  id="dropoff"
                  value={dropoffLocation}
                  onChange={(e) => handleLocationChange('dropoff', e.target.value)}
                  placeholder="Enter drop-off location"
                  required
                />
                {dropoffSuggestions.length > 0 && (
                  <div className="absolute bg-white border shadow-lg mt-2 w-full">
                    {dropoffSuggestions.map((location, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => setDropoffLocation(location)}
                      >
                        {location}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pickupDate">Pickup Date</Label>
                <Input
                  id="pickupDate"
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pickupTime">Pickup Time</Label>
                <Input
                  id="pickupTime"
                  type="time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dropoffDate">Drop-off Date</Label>
                <Input
                  id="dropoffDate"
                  type="date"
                  value={dropoffDate}
                  onChange={(e) => setDropoffDate(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dropoffTime">Drop-off Time</Label>
                <Input
                  id="dropoffTime"
                  type="time"
                  value={dropoffTime}
                  onChange={(e) => setDropoffTime(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <Button type="submit" className="w-full">Search Available Cars</Button>
          </form>
        </CardContent>
      </Card>

      {showCars && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Available Cars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableCars.map((car) => (
              <Card key={car.id} className={car.premium ? "border-2 border-yellow-500" : ""}>
                <CardContent className="p-4">
                  <Image
                    src={car.image}
                    alt={car.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                  {car.premium && (
                    <span className="bg-yellow-500 text-yellow-900 text-xs font-semibold px-2 py-1 rounded-full mb-2 inline-block">
                      Premium
                    </span>
                  )}
                  <p className="text-lg font-bold">${car.price} per day</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Book Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-4 mt-8">Pickup Location</h2>
          <LoadScript googleMapsApiKey="AIzaSyBoTWqBLxUZU1wKFJIsVJjjgKPxixwIeDI">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={{ lat: 40.748817, lng: -73.985428 }} // Example coordinates (New York)
              zoom={12}
            >
              <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
            </GoogleMap>
          </LoadScript>
        </div>
      )}
    </div>
  )
}
