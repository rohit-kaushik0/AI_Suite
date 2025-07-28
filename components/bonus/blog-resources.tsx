"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, BookOpen, Download, ExternalLink, User } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const BlogResources = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "The Future of AI in Marketing: 2024 Trends and Predictions",
      excerpt: "Explore the latest AI marketing trends that will shape the industry in 2024 and beyond.",
      category: "AI Trends",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      author: "Sarah Chen",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "How to Increase ROI by 300% with AI-Powered Segmentation",
      excerpt: "Learn proven strategies for customer segmentation that drive real results.",
      category: "Case Study",
      readTime: "6 min read",
      date: "Dec 12, 2024",
      author: "Mike Rodriguez",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Complete Guide to Marketing Automation in 2024",
      excerpt: "Everything you need to know about setting up effective marketing automation.",
      category: "Guide",
      readTime: "12 min read",
      date: "Dec 10, 2024",
      author: "Emily Johnson",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Real-Time Personalization: The Key to Customer Engagement",
      excerpt: "Discover how real-time personalization can transform your customer experience.",
      category: "Strategy",
      readTime: "5 min read",
      date: "Dec 8, 2024",
      author: "David Park",
      image: "/api/placeholder/400/250"
    }
  ]

  const resources = [
    {
      type: "ebook",
      title: "The Ultimate AI Marketing Playbook",
      description: "50-page comprehensive guide to implementing AI in your marketing strategy",
      downloads: "12.3K",
      icon: BookOpen,
      color: "from-blue-500 to-purple-600"
    },
    {
      type: "whitepaper",
      title: "ROI Analysis: AI vs Traditional Marketing",
      description: "Data-driven analysis comparing AI and traditional marketing performance",
      downloads: "8.7K",
      icon: Download,
      color: "from-green-500 to-blue-500"
    },
    {
      type: "template",
      title: "Marketing Automation Templates",
      description: "Ready-to-use templates for email, social media, and campaign automation",
      downloads: "15.2K",
      icon: ExternalLink,
      color: "from-purple-500 to-pink-500"
    }
  ]

  const categories = [
    { name: "All Posts", count: 47, active: true },
    { name: "AI Trends", count: 12 },
    { name: "Case Studies", count: 8 },
    { name: "Guides", count: 15 },
    { name: "Strategy", count: 12 }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Resources & Insights
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Learn from the
            <span className="text-gradient block">best in AI marketing</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay ahead with our latest insights, case studies, and comprehensive guides 
            on AI-powered marketing strategies.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.name}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                category.active
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative">
                <div className="aspect-video bg-gradient-mesh" />
                <Badge variant="gradient" className="absolute top-4 left-4">
                  Featured
                </Badge>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge variant="glass" className="mb-2">
                    {featuredArticles[0].category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-foreground transition-colors">
                    {featuredArticles[0].title}
                  </h3>
                  <p className="text-sm opacity-90 mb-3 max-w-md">
                    {featuredArticles[0].excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-xs">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {featuredArticles[0].author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {featuredArticles[0].date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {featuredArticles[0].readTime}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Article Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {featuredArticles.slice(1, 4).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="group cursor-pointer"
              >
                <Card className="p-4 hover:shadow-lg transition-all duration-300">
                  <div className="flex space-x-4">
                    <div className="w-20 h-20 bg-gradient-mesh rounded-lg flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {article.category}
                      </Badge>
                      <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {article.title}
                      </h4>
                      <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                        <span>{article.author}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Resources Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Free Resources & Tools
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Download our comprehensive guides, templates, and tools to accelerate your AI marketing success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {resources.map((resource, resourceIndex) => {
                      const Icon = resource.icon
                      return (
                <motion.div
                                          key={resourceIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: resourceIndex * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${resource.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="outline" className="w-fit text-xs">
                        {resource.type.toUpperCase()}
                      </Badge>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {resource.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {resource.downloads} downloads
                        </span>
                        <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                          Download
                          <Download className="ml-2 h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Want more insights delivered to your inbox?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join 50,000+ marketers getting weekly AI marketing insights and tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex-1 group">
                Subscribe to Newsletter
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="flex-1">
                Browse All Articles
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogResources 