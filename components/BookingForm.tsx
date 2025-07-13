"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, MapPin, Phone, Mail, User } from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    spaceType: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you! We'll contact you within 24 hours to schedule your consultation.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="book-demo" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Book Your Free Consultation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let our experts assess your space and create a customized plant solution that transforms your environment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Schedule Your Visit</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll contact you within 24 hours to confirm your appointment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Phone *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Company</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Space Type *</label>
                    <select
                      name="spaceType"
                      value={formData.spaceType}
                      onChange={handleChange}
                      className="w-full h-9 px-3 py-1 text-sm border border-input bg-transparent rounded-md shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      required
                    >
                      <option value="">Select space type</option>
                      <option value="office">Corporate Office</option>
                      <option value="home">Home/Residential</option>
                      <option value="coworking">Co-working Space</option>
                      <option value="retail">Retail/Commercial</option>
                      <option value="event">Event Space</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Preferred Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          name="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Preferred Time</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full h-9 pl-10 pr-3 py-1 text-sm border border-input bg-transparent rounded-md shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                          <option value="">Select time</option>
                          <option value="9:00 AM">9:00 AM</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="1:00 PM">1:00 PM</option>
                          <option value="2:00 PM">2:00 PM</option>
                          <option value="3:00 PM">3:00 PM</option>
                          <option value="4:00 PM">4:00 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Additional Information</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your space, specific requirements, or any questions you have..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-green-700 hover:bg-green-600 text-white py-3">
                    Schedule Free Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info Panel */}
            <div className="space-y-8">
              <Card className="border-0 bg-green-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Comprehensive space assessment</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Customized plant recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Detailed proposal and pricing</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Maintenance plan discussion</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-blue-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">hello@greenry.com</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">Available nationwide</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-yellow-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Consultation</h3>
                  <p className="text-gray-700 text-sm">
                    Our initial consultation is completely free with no obligation. 
                    We&apos;ll assess your space and provide expert recommendations tailored to your needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}