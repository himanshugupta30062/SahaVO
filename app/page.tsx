"use client"

import { useState } from "react"
import Image from "next/image"
import {
  BookOpen,
  Users,
  MessageCircle,
  Star,
  MapPin,
  Calendar,
  Search,
  Plus,
  Bookmark,
  Video,
  Heart,
  Filter,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function ReadingGroupApp() {
  const [activeTab, setActiveTab] = useState("discover")

  const featuredBooks = [
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho",
      cover: "/placeholder.svg?height=200&width=150",
      rating: 4.8,
      activeGroups: 12,
      totalReaders: 1247,
      price: "₹299",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      cover: "/placeholder.svg?height=200&width=150",
      rating: 4.9,
      activeGroups: 8,
      totalReaders: 892,
      price: "₹399",
    },
    {
      id: 3,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      cover: "/placeholder.svg?height=200&width=150",
      rating: 4.7,
      activeGroups: 15,
      totalReaders: 2156,
      price: "₹449",
    },
  ]

  const myReadingGroups = [
    {
      id: 1,
      bookTitle: "The Psychology of Money",
      author: "Morgan Housel",
      members: 24,
      progress: 65,
      lastActivity: "2 hours ago",
      unreadMessages: 3,
      meetupDate: "Dec 28, 2024",
    },
    {
      id: 2,
      bookTitle: "Think and Grow Rich",
      author: "Napoleon Hill",
      members: 18,
      progress: 40,
      lastActivity: "5 hours ago",
      unreadMessages: 7,
      meetupDate: "Jan 5, 2025",
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      type: "Author Session",
      title: "Live Q&A with Chetan Bhagat",
      book: "400 Days",
      date: "Dec 25, 2024",
      time: "7:00 PM IST",
      attendees: 156,
    },
    {
      id: 2,
      type: "Physical Meetup",
      title: "Philosophy Book Club",
      location: "Connaught Place, Delhi",
      date: "Dec 30, 2024",
      time: "4:00 PM",
      attendees: 12,
    },
  ]

  const discussions = [
    {
      id: 1,
      user: "Priya Sharma",
      avatar: "/placeholder.svg?height=40&width=40",
      book: "The Alchemist",
      question: "What did you think about Santiago's journey in the desert?",
      replies: 8,
      likes: 15,
      timeAgo: "3 hours ago",
    },
    {
      id: 2,
      user: "Rahul Kumar",
      avatar: "/placeholder.svg?height=40&width=40",
      book: "Atomic Habits",
      question: "How are you implementing the 2-minute rule in your daily life?",
      replies: 12,
      likes: 23,
      timeAgo: "6 hours ago",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">ReadTogether</h1>
            </div>

            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search books, authors, or groups..." className="pl-10 bg-gray-50 border-gray-200" />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white">
            <TabsTrigger value="discover">Discover</TabsTrigger>
            <TabsTrigger value="my-groups">My Groups</TabsTrigger>
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="library">Library</TabsTrigger>
          </TabsList>

          {/* Discover Tab */}
          <TabsContent value="discover" className="space-y-8">
            {/* Featured Books */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Featured Books</h2>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredBooks.map((book) => (
                  <Card key={book.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex space-x-4">
                        <Image
                          src={book.cover || "/placeholder.svg"}
                          alt={book.title}
                          width={80}
                          height={120}
                          className="rounded-lg shadow-md"
                        />
                        <div className="flex-1 space-y-2">
                          <h3 className="font-semibold text-lg line-clamp-2">{book.title}</h3>
                          <p className="text-gray-600 text-sm">by {book.author}</p>

                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{book.rating}</span>
                          </div>

                          <div className="space-y-1 text-xs text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Users className="h-3 w-3" />
                              <span>{book.activeGroups} active groups</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <BookOpen className="h-3 w-3" />
                              <span>{book.totalReaders} readers</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-2">
                            <span className="font-bold text-lg text-green-600">{book.price}</span>
                            <div className="space-x-2">
                              <Button size="sm" variant="outline">
                                <Plus className="h-4 w-4 mr-1" />
                                Join Group
                              </Button>
                              <Button size="sm">Buy Book</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Quick Stats */}
            <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                  <div className="text-2xl font-bold">2,847</div>
                  <div className="text-sm text-gray-600">Books Available</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 mx-auto mb-2 text-green-500" />
                  <div className="text-2xl font-bold">156</div>
                  <div className="text-sm text-gray-600">Active Groups</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                  <div className="text-2xl font-bold">12,456</div>
                  <div className="text-sm text-gray-600">Discussions</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-2 text-red-500" />
                  <div className="text-2xl font-bold">23</div>
                  <div className="text-sm text-gray-600">Cities</div>
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          {/* My Groups Tab */}
          <TabsContent value="my-groups" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">My Reading Groups</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Group
              </Button>
            </div>

            <div className="grid gap-6">
              {myReadingGroups.map((group) => (
                <Card key={group.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{group.bookTitle}</h3>
                        <p className="text-gray-600">by {group.author}</p>
                      </div>
                      <Badge variant="secondary">{group.members} members</Badge>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Reading Progress</span>
                          <span>{group.progress}%</span>
                        </div>
                        <Progress value={group.progress} className="h-2" />
                      </div>

                      <div className="flex justify-between items-center text-sm text-gray-600">
                        <span>Last activity: {group.lastActivity}</span>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{group.unreadMessages} new</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>Meetup: {group.meetupDate}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2 pt-2">
                        <Button size="sm">Join Discussion</Button>
                        <Button size="sm" variant="outline">
                          View Progress
                        </Button>
                        <Button size="sm" variant="outline">
                          <MapPin className="h-4 w-4 mr-1" />
                          Find Meetup
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Discussions Tab */}
          <TabsContent value="discussions" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Recent Discussions</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Start Discussion
              </Button>
            </div>

            <div className="space-y-4">
              {discussions.map((discussion) => (
                <Card key={discussion.id}>
                  <CardContent className="p-6">
                    <div className="flex space-x-4">
                      <Avatar>
                        <AvatarImage src={discussion.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {discussion.user
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-semibold">{discussion.user}</span>
                          <Badge variant="outline" className="text-xs">
                            {discussion.book}
                          </Badge>
                          <span className="text-sm text-gray-500">{discussion.timeAgo}</span>
                        </div>
                        <p className="text-gray-800 mb-3">{discussion.question}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <button className="flex items-center space-x-1 hover:text-red-500">
                            <Heart className="h-4 w-4" />
                            <span>{discussion.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-blue-500">
                            <MessageCircle className="h-4 w-4" />
                            <span>{discussion.replies} replies</span>
                          </button>
                          <button className="hover:text-gray-800">Reply</button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
              <Button>
                <Calendar className="h-4 w-4 mr-2" />
                Create Event
              </Button>
            </div>

            <div className="grid gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <Badge className="mb-2">{event.type}</Badge>
                        <h3 className="font-semibold text-lg">{event.title}</h3>
                        {event.book && <p className="text-gray-600">Book: {event.book}</p>}
                        {event.location && (
                          <p className="text-gray-600 flex items-center mt-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            {event.location}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{event.date}</div>
                        <div className="text-sm text-gray-600">{event.time}</div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees} attending</span>
                      </div>
                      <div className="space-x-2">
                        <Button size="sm" variant="outline">
                          <Bookmark className="h-4 w-4 mr-1" />
                          Save
                        </Button>
                        <Button size="sm">
                          {event.type === "Author Session" ? (
                            <>
                              <Video className="h-4 w-4 mr-1" />
                              Join Session
                            </>
                          ) : (
                            "Attend Meetup"
                          )}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Library Tab */}
          <TabsContent value="library" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Digital Library</h2>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <MapPin className="h-4 w-4 mr-2" />
                  Find Physical Libraries
                </Button>
                <Button>Browse All Books</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5" />
                    <span>My Library</span>
                  </CardTitle>
                  <CardDescription>Books you own</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2">24</div>
                  <p className="text-sm text-gray-600">Books in your collection</p>
                  <Button className="w-full mt-4" variant="outline">
                    View Collection
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bookmark className="h-5 w-5" />
                    <span>Wishlist</span>
                  </CardTitle>
                  <CardDescription>Books to read later</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2">12</div>
                  <p className="text-sm text-gray-600">Books on your wishlist</p>
                  <Button className="w-full mt-4" variant="outline">
                    View Wishlist
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>Nearby Libraries</span>
                  </CardTitle>
                  <CardDescription>Physical locations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2">8</div>
                  <p className="text-sm text-gray-600">Libraries within 10km</p>
                  <Button className="w-full mt-4" variant="outline">
                    Find Libraries
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
