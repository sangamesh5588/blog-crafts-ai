import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Edit, Trash2, Eye, Calendar, BarChart3, Plus } from "lucide-react";

export default function BlogList() {
  // Mock data - will be replaced with Supabase data
  const blogs = [
    {
      id: 1,
      title: "10 Essential SEO Tips for Modern Websites",
      description: "Learn the latest SEO strategies that actually work in 2024. From keyword research to technical optimization.",
      status: "published",
      seoScore: 87,
      wordCount: 1247,
      createdAt: "2024-01-15",
      updatedAt: "2024-01-16"
    },
    {
      id: 2,
      title: "The Future of AI in Content Marketing",
      description: "Explore how artificial intelligence is revolutionizing content creation and marketing strategies.",
      status: "draft",
      seoScore: 72,
      wordCount: 892,
      createdAt: "2024-01-14",
      updatedAt: "2024-01-14"
    },
    {
      id: 3,
      title: "Building Responsive Websites with Tailwind CSS",
      description: "A comprehensive guide to creating beautiful, responsive designs using Tailwind CSS framework.",
      status: "published",
      seoScore: 94,
      wordCount: 1456,
      createdAt: "2024-01-12",
      updatedAt: "2024-01-13"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeoScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">My Blogs</h1>
            <p className="text-muted-foreground mt-1">
              Manage and organize all your blog content
            </p>
          </div>
          <Button variant="premium">
            <Plus className="h-4 w-4 mr-2" />
            New Blog
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">Total Blogs</p>
                  <p className="text-2xl font-bold">{blogs.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <Eye className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">Published</p>
                  <p className="text-2xl font-bold">{blogs.filter(b => b.status === 'published').length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <Edit className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">Drafts</p>
                  <p className="text-2xl font-bold">{blogs.filter(b => b.status === 'draft').length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">Avg. SEO Score</p>
                  <p className="text-2xl font-bold">
                    {Math.round(blogs.reduce((acc, blog) => acc + blog.seoScore, 0) / blogs.length)}%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Blog List */}
        <div className="space-y-6">
          {blogs.map((blog) => (
            <Card key={blog.id} className="border-0 shadow-card hover:shadow-premium transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <CardTitle className="text-xl hover:text-primary cursor-pointer transition-colors">
                      {blog.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {blog.description}
                    </CardDescription>
                  </div>
                  <Badge className={getStatusColor(blog.status)}>
                    {blog.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Updated: {new Date(blog.updatedAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <BarChart3 className="h-4 w-4" />
                      {blog.wordCount} words
                    </div>
                    <div className={`flex items-center gap-1 font-semibold ${getSeoScoreColor(blog.seoScore)}`}>
                      <BarChart3 className="h-4 w-4" />
                      SEO: {blog.seoScore}%
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State (when no blogs) */}
        {blogs.length === 0 && (
          <Card className="border-0 shadow-card text-center py-12">
            <CardContent>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Plus className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">No blogs yet</h3>
                  <p className="text-muted-foreground">
                    Create your first AI-powered blog post to get started
                  </p>
                </div>
                <Button variant="premium">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Blog
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}