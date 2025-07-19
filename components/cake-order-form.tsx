"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Upload, Plus, Minus, Heart, Gift, Users, Cake } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

interface OrderFormData {
  // Basic Info
  cakeType: string
  eventDate: Date | undefined
  servings: number

  // Flavors
  cakeFlavor: string
  frostingFlavor: string
  filling: string

  // Customization
  tiers: number
  shape: string
  colors: string[]
  decorations: string[]
  customText: string
  specialRequests: string

  // Delivery
  deliveryMethod: string
  deliveryAddress: string

  // Contact
  customerName: string
  email: string
  phone: string

  // Pricing
  basePrice: number
  totalPrice: number
}

export default function CakeOrderForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<OrderFormData>({
    cakeType: "",
    eventDate: undefined,
    servings: 12,
    cakeFlavor: "",
    frostingFlavor: "",
    filling: "",
    tiers: 1,
    shape: "",
    colors: [],
    decorations: [],
    customText: "",
    specialRequests: "",
    deliveryMethod: "",
    deliveryAddress: "",
    customerName: "",
    email: "",
    phone: "",
    basePrice: 0,
    totalPrice: 0,
  })

  const cakeTypes = [
    { id: "wedding", name: "Wedding Cake", icon: Heart, basePrice: 200, description: "Elegant multi-tier cakes" },
    { id: "birthday", name: "Birthday Cake", icon: Gift, basePrice: 45, description: "Custom celebration cakes" },
    { id: "corporate", name: "Corporate Event", icon: Users, basePrice: 80, description: "Professional event cakes" },
    { id: "custom", name: "Custom Design", icon: Cake, basePrice: 100, description: "Unique custom creations" },
  ]

  const cakeFlavors = [
    "Vanilla Bean",
    "Chocolate Fudge",
    "Red Velvet",
    "Lemon",
    "Strawberry",
    "Carrot",
    "Funfetti",
    "Coconut",
    "Banana",
    "Marble",
  ]

  const frostingFlavors = [
    "Buttercream",
    "Cream Cheese",
    "Chocolate Ganache",
    "Fondant",
    "Whipped Cream",
    "Caramel",
    "Peanut Butter",
    "Lemon",
  ]

  const decorationOptions = [
    { id: "flowers", name: "Fresh Flowers", price: 25 },
    { id: "sugar-flowers", name: "Sugar Flowers", price: 35 },
    { id: "pearls", name: "Edible Pearls", price: 15 },
    { id: "gold-leaf", name: "Gold Leaf", price: 40 },
    { id: "custom-topper", name: "Custom Cake Topper", price: 30 },
    { id: "piping", name: "Decorative Piping", price: 20 },
  ]

  const calculatePrice = () => {
    const selectedCakeType = cakeTypes.find((type) => type.id === formData.cakeType)
    let basePrice = selectedCakeType?.basePrice || 0

    // Size multiplier
    const sizeMultiplier = Math.ceil(formData.servings / 12)
    basePrice *= sizeMultiplier

    // Tier multiplier
    if (formData.tiers > 1) {
      basePrice *= 1 + (formData.tiers - 1) * 0.5
    }

    // Decorations
    const decorationPrice = formData.decorations.reduce((total, decorationId) => {
      const decoration = decorationOptions.find((d) => d.id === decorationId)
      return total + (decoration?.price || 0)
    }, 0)

    const totalPrice = basePrice + decorationPrice

    setFormData((prev) => ({
      ...prev,
      basePrice,
      totalPrice,
    }))
  }

  const handleCakeTypeSelect = (cakeTypeId: string) => {
    setFormData((prev) => ({ ...prev, cakeType: cakeTypeId }))
    calculatePrice()
  }

  const handleDecorationToggle = (decorationId: string) => {
    setFormData((prev) => ({
      ...prev,
      decorations: prev.decorations.includes(decorationId)
        ? prev.decorations.filter((id) => id !== decorationId)
        : [...prev.decorations, decorationId],
    }))
    setTimeout(calculatePrice, 0)
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = () => {
    console.log("Order submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Order submitted successfully! We'll contact you within 24 hours.")
  }

  const steps = [
    { number: 1, title: "Cake Type & Date", description: "Choose your cake style" },
    { number: 2, title: "Flavors & Design", description: "Customize your cake" },
    { number: 3, title: "Decorations", description: "Add special touches" },
    { number: 4, title: "Contact & Delivery", description: "Finalize your order" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-amber-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
            Order Your Dream Cake
          </h1>
          <p className="text-xl text-gray-600">Let's create something sweet and memorable together</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-semibold",
                    currentStep >= step.number
                      ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white"
                      : "bg-gray-200 text-gray-500",
                  )}
                >
                  {step.number}
                </div>
                <div className="ml-3 hidden md:block">
                  <div className={cn("font-semibold", currentStep >= step.number ? "text-rose-600" : "text-gray-500")}>
                    {step.title}
                  </div>
                  <div className="text-sm text-gray-500">{step.description}</div>
                </div>
                {index < steps.length - 1 && (
                  <div className={cn("w-16 h-1 mx-4", currentStep > step.number ? "bg-rose-500" : "bg-gray-200")} />
                )}
              </div>
            ))}
          </div>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="p-8">
            {/* Step 1: Cake Type & Date */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Choose Your Cake Type</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {cakeTypes.map((type) => (
                      <Card
                        key={type.id}
                        className={cn(
                          "cursor-pointer transition-all duration-200 hover:shadow-lg",
                          formData.cakeType === type.id ? "ring-2 ring-rose-500 bg-rose-50" : "hover:bg-gray-50",
                        )}
                        onClick={() => handleCakeTypeSelect(type.id)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4">
                            <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-3 rounded-full">
                              <type.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-lg">{type.name}</h4>
                              <p className="text-gray-600 text-sm">{type.description}</p>
                              <p className="text-rose-600 font-semibold">From ${type.basePrice}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="event-date" className="text-lg font-semibold mb-3 block">
                      Event Date
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !formData.eventDate && "text-muted-foreground",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.eventDate ? format(formData.eventDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={formData.eventDate}
                          onSelect={(date) => setFormData((prev) => ({ ...prev, eventDate: date }))}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <Label htmlFor="servings" className="text-lg font-semibold mb-3 block">
                      Number of Servings
                    </Label>
                    <div className="flex items-center space-x-4">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            servings: Math.max(6, prev.servings - 6),
                          }))
                        }
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <div className="text-2xl font-semibold w-16 text-center">{formData.servings}</div>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            servings: prev.servings + 6,
                          }))
                        }
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Flavors & Design */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Flavors & Design</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-lg font-semibold mb-3 block">Cake Flavor</Label>
                    <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, cakeFlavor: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose cake flavor" />
                      </SelectTrigger>
                      <SelectContent>
                        {cakeFlavors.map((flavor) => (
                          <SelectItem key={flavor} value={flavor}>
                            {flavor}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-lg font-semibold mb-3 block">Frosting Flavor</Label>
                    <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, frostingFlavor: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose frosting flavor" />
                      </SelectTrigger>
                      <SelectContent>
                        {frostingFlavors.map((flavor) => (
                          <SelectItem key={flavor} value={flavor}>
                            {flavor}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-lg font-semibold mb-3 block">Number of Tiers</Label>
                    <RadioGroup
                      value={formData.tiers.toString()}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, tiers: Number.parseInt(value) }))}
                    >
                      {[1, 2, 3, 4].map((tier) => (
                        <div key={tier} className="flex items-center space-x-2">
                          <RadioGroupItem value={tier.toString()} id={`tier-${tier}`} />
                          <Label htmlFor={`tier-${tier}`}>
                            {tier} Tier{tier > 1 ? "s" : ""}
                            {tier > 1 && <span className="text-rose-600 ml-2">+${Math.round((tier - 1) * 50)}%</span>}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-lg font-semibold mb-3 block">Cake Shape</Label>
                    <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, shape: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose shape" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="round">Round</SelectItem>
                        <SelectItem value="square">Square</SelectItem>
                        <SelectItem value="heart">Heart</SelectItem>
                        <SelectItem value="rectangle">Rectangle</SelectItem>
                        <SelectItem value="custom">Custom Shape (+$25)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label className="text-lg font-semibold mb-3 block">Custom Text (Optional)</Label>
                  <Input
                    placeholder="e.g., Happy Birthday Sarah, Congratulations!"
                    value={formData.customText}
                    onChange={(e) => setFormData((prev) => ({ ...prev, customText: e.target.value }))}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Decorations */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Decorations & Add-ons</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {decorationOptions.map((decoration) => (
                    <Card
                      key={decoration.id}
                      className={cn(
                        "cursor-pointer transition-all duration-200",
                        formData.decorations.includes(decoration.id)
                          ? "ring-2 ring-rose-500 bg-rose-50"
                          : "hover:bg-gray-50",
                      )}
                      onClick={() => handleDecorationToggle(decoration.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Checkbox
                              checked={formData.decorations.includes(decoration.id)}
                              onChange={() => handleDecorationToggle(decoration.id)}
                            />
                            <div>
                              <h4 className="font-semibold">{decoration.name}</h4>
                              <p className="text-rose-600 font-semibold">+${decoration.price}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div>
                  <Label className="text-lg font-semibold mb-3 block">Color Preferences</Label>
                  <Input
                    placeholder="e.g., Blush pink, gold accents, ivory"
                    value={formData.colors.join(", ")}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        colors: e.target.value.split(",").map((c) => c.trim()),
                      }))
                    }
                  />
                </div>

                <div>
                  <Label className="text-lg font-semibold mb-3 block">Special Requests</Label>
                  <Textarea
                    placeholder="Any special dietary requirements, design inspirations, or additional requests..."
                    value={formData.specialRequests}
                    onChange={(e) => setFormData((prev) => ({ ...prev, specialRequests: e.target.value }))}
                    rows={4}
                  />
                </div>

                <div>
                  <Label className="text-lg font-semibold mb-3 block">Reference Images (Optional)</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-rose-400 transition-colors">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Upload inspiration photos</p>
                    <Button variant="outline">Choose Files</Button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Contact & Delivery */}
            {currentStep === 4 && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact & Delivery Information</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-lg font-semibold mb-3 block">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.customerName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, customerName: e.target.value }))}
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-lg font-semibold mb-3 block">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-lg font-semibold mb-3 block">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <Label className="text-lg font-semibold mb-3 block">Delivery Method</Label>
                  <RadioGroup
                    value={formData.deliveryMethod}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, deliveryMethod: value }))}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <Label htmlFor="pickup">Pickup at bakery (Free)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="delivery" id="delivery" />
                      <Label htmlFor="delivery">Local delivery (+$15)</Label>
                    </div>
                  </RadioGroup>
                </div>

                {formData.deliveryMethod === "delivery" && (
                  <div>
                    <Label htmlFor="address" className="text-lg font-semibold mb-3 block">
                      Delivery Address
                    </Label>
                    <Textarea
                      id="address"
                      value={formData.deliveryAddress}
                      onChange={(e) => setFormData((prev) => ({ ...prev, deliveryAddress: e.target.value }))}
                      placeholder="Full delivery address including any special instructions"
                      rows={3}
                    />
                  </div>
                )}

                {/* Order Summary */}
                <Card className="bg-gradient-to-r from-rose-50 to-pink-50 border-rose-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-rose-800">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Base Price ({formData.servings} servings)</span>
                        <span>${formData.basePrice}</span>
                      </div>
                      {formData.decorations.length > 0 && (
                        <div className="flex justify-between">
                          <span>Decorations</span>
                          <span>
                            +$
                            {formData.decorations.reduce((total, decorationId) => {
                              const decoration = decorationOptions.find((d) => d.id === decorationId)
                              return total + (decoration?.price || 0)
                            }, 0)}
                          </span>
                        </div>
                      )}
                      {formData.deliveryMethod === "delivery" && (
                        <div className="flex justify-between">
                          <span>Delivery</span>
                          <span>+$15</span>
                        </div>
                      )}
                      <div className="border-t pt-2 flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span className="text-rose-600">
                          ${formData.totalPrice + (formData.deliveryMethod === "delivery" ? 15 : 0)}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              <Button variant="outline" onClick={prevStep} disabled={currentStep === 1} className="px-8">
                Previous
              </Button>

              {currentStep < 4 ? (
                <Button
                  onClick={nextStep}
                  className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 px-8"
                  disabled={
                    (currentStep === 1 && !formData.cakeType) ||
                    (currentStep === 2 && (!formData.cakeFlavor || !formData.frostingFlavor))
                  }
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 px-8"
                  disabled={!formData.customerName || !formData.email || !formData.phone || !formData.deliveryMethod}
                >
                  Submit Order
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
