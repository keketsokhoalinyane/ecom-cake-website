import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Star, Heart, Gift, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CakeWebsite() {
  const cakeTypes = [
    {
      name: "Wedding Cakes",
      description: "Elegant multi-tier cakes for your special day",
      price: "From R200",
      icon: Heart,
      image: "https://i.pinimg.com/736x/8b/d0/7b/8bd07b13fc77cc7209c2272add4619d6.jpg?height=300&width=400",
    },
    {
      name: "Birthday Cakes",
      description: "Custom designs for memorable celebrations",
      price: "From R450",
      icon: Gift,
      image: "https://i.pinimg.com/736x/e3/12/af/e312af7f74d5c70ce98d24d94c50a561.jpg?height=300&width=400",
    },
    {
      name: "Corporate Events",
      description: "Professional cakes for business occasions",
      price: "From R800",
      icon: Users,
      image: "https://i.pinimg.com/1200x/18/77/ef/1877ef851557e71810b3b184948d06cb.jpg?height=300&width=400",
    },
  ]

  const gallery = [
    "https://i.pinimg.com/736x/88/59/a7/8859a71140f2c04ab17ab9a4eb26031a.jpg?height=300&width=300",
    "https://i.pinimg.com/736x/03/25/62/032562f21d1a900f9c1f8939aee885ef.jpg?height=300&width=300",
    "https://i.pinimg.com/736x/a6/92/18/a69218b93a3a04bebb3a31b37e35f316.jpg?height=300&width=300",
    "https://i.pinimg.com/736x/d4/a9/47/d4a947ad96540a1fd5ab93504540461a.jpg?height=300&width=300",
    "https://i.pinimg.com/1200x/09/5d/a9/095da9a24b283aa8b06c68e809377a2e.jpg?height=300&width=300",
    "https://i.pinimg.com/736x/f4/33/62/f43362e022fe087a94682984c2f28984.jpg?height=300&width=300",
  ]

  const testimonials = [
    {
      name: "Sarah Skhosana",
      text: "Absolutely stunning wedding cake! Every guest was amazed by both the taste and design.",
      rating: 5,
    },
    {
      name: "dennis Ndlhovu",
      text: "Best birthday cake we've ever had. The attention to detail was incredible.",
      rating: 5,
    },
    {
      name: "Keketso Khoalinyane",
      text: "Professional service and delicious cakes. Highly recommend for any event!",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Sweet Dreams Bakery
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-rose-600 transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-rose-600 transition-colors">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-rose-600 transition-colors">
                Services
              </a>
              <a href="#gallery" className="text-gray-700 hover:text-rose-600 transition-colors">
                Gallery
              </a>
              <a href="#contact" className="text-gray-700 hover:text-rose-600 transition-colors">
                Contact
              </a>
            </nav>
            <Link href="/order">
              <Button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600">
                Order Now
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-rose-100 text-rose-700 hover:bg-rose-200">
              ✨ Handcrafted with Love Since 2015
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
              TEMBISA'S LEADING CAKE SELLERS.
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From elegant wedding cakes to delightful birthday treats, we craft every cake with passion, premium
              ingredients, and attention to detail that makes your celebrations unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/order">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-lg px-8 py-3"
                >
                  Order Your Cake
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-rose-300 text-rose-600 hover:bg-rose-50 text-lg px-8 py-3"
              >
                Get Quote
              </Button>
            </div>
          </div>
          <div className="mt-16 relative">
            <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://i.pinimg.com/736x/f1/69/9e/f1699e760a3b55581297ae9cefd76c4c.jpg?height=500&width=800"
                alt="Beautiful wedding cake"
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
              <Star className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-amber-100 text-amber-700">Our Story</Badge>
              <h3 className="text-4xl font-bold mb-6 text-gray-800">Passion Meets Perfection</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2015 by master baker Elena Rodriguez, Sweet Dreams Bakery has been creating extraordinary
                cakes that combine traditional techniques with modern artistry. Every cake tells a story, and we're
                honored to be part of your most precious moments.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-600 mb-2">500+</div>
                  <div className="text-gray-600">Happy Couples</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-600 mb-2">2000+</div>
                  <div className="text-gray-600">Cakes Created</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://i.pinimg.com/736x/58/46/4d/58464d9b0d3b77bcfbe351d494ad54db.jpg?height=400&width=500"
                alt="Baker at work"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">15+ Years</div>
                <div className="text-rose-100">Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-pink-100 text-pink-700">Our Specialties</Badge>
            <h3 className="text-4xl font-bold mb-6 text-gray-800">Cakes for Every Occasion</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we create custom cakes that perfectly match your vision
              and taste.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cakeTypes.map((cake, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={cake.image || "/placeholder.svg"}
                      alt={cake.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                      <cake.icon className="w-6 h-6 text-rose-600" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 text-gray-800">{cake.name}</h4>
                    <p className="text-gray-600 mb-4">{cake.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-rose-600">{cake.price}</span>
                      <Button variant="outline" className="border-rose-300 text-rose-600 hover:bg-rose-50">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-700">Portfolio</Badge>
            <h3 className="text-4xl font-bold mb-6 text-gray-800">Our Sweet Creations</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our recent masterpieces that have made celebrations extra special.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Cake ${index + 1}`}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-rose-100 text-rose-700">Testimonials</Badge>
            <h3 className="text-4xl font-bold mb-6 text-gray-800">What Our Customers Say</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="font-semibold text-gray-800">- {testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6">Let's Create Something Sweet Together</h3>
            <p className="text-xl text-rose-100 max-w-2xl mx-auto">
              Ready to order your dream cake? Get in touch with us today for a free consultation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">Call Us</h4>
              <p className="text-rose-100">(555) 123-CAKE</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-rose-100">hello@sweetdreams.com</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">Visit Us</h4>
              <p className="text-rose-100">123 Baker Street, Sweet City</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">Hours</h4>
              <p className="text-rose-100">Tue-Sun: 8AM-6PM</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/order">
              <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50 text-lg px-8 py-3">
                Start Your Order
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold">Sweet Dreams Bakery</h1>
          </div>
          <p className="text-gray-400 mb-6">Creating sweet memories, one cake at a time.</p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500">© 2024 Sweet Dreams Bakery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
