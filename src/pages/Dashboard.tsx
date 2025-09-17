import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Plus, FileText, BarChart3, Zap, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

export default function Dashboard() {
  const stats = [
    { title: "Blogs Created", value: "12", icon: FileText },
    { title: "Words Written", value: "24,567", icon: BarChart3 },
    { title: "SEO Score Avg", value: "87%", icon: Trophy },
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold leading-tight">
                  Create Stunning Blogs with{" "}
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    AI Power
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Generate SEO-optimized, engaging blog content in minutes. From topic to publish-ready posts with our AI-powered writing assistant.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/editor">
                  <Button variant="premium" size="lg" className="shadow-premium w-full sm:w-auto">
                    <Plus className="h-5 w-5 mr-2" />
                    Create New Blog
                  </Button>
                </Link>
                <Link to="/blogs">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <FileText className="h-5 w-5 mr-2" />
                    View My Blogs
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {stats.map((stat) => (
                  <div key={stat.title} className="text-center space-y-2">
                    <stat.icon className="h-8 w-8 mx-auto text-primary" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.title}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="AI-powered blog creation illustration"
                className="w-full h-auto rounded-2xl shadow-premium"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your Writing Dashboard</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create, manage, and optimize your blog content in one place.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* New Blog Card */}
            <Card className="group hover:shadow-premium transition-all duration-300 cursor-pointer border-0 shadow-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <Plus className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Create New Blog</CardTitle>
                <CardDescription>
                  Start writing with AI assistance and SEO optimization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="premium" className="w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* My Blogs Card */}
            <Card className="group hover:shadow-premium transition-all duration-300 cursor-pointer border-0 shadow-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">My Blogs</CardTitle>
                <CardDescription>
                  View, edit, and manage all your published content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  View Blogs
                </Button>
              </CardContent>
            </Card>

            {/* Analytics Card */}
            <Card className="group hover:shadow-premium transition-all duration-300 cursor-pointer border-0 shadow-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Analytics</CardTitle>
                <CardDescription>
                  Track performance and SEO scores of your content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  View Analytics
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-muted-foreground">
              Everything you need for professional blog creation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <Zap className="h-12 w-12 mx-auto text-primary" />
              <h3 className="text-lg font-semibold">AI Generation</h3>
              <p className="text-sm text-muted-foreground">
                Generate high-quality content from topics and keywords
              </p>
            </div>
            <div className="text-center space-y-4">
              <BarChart3 className="h-12 w-12 mx-auto text-primary" />
              <h3 className="text-lg font-semibold">SEO Optimization</h3>
              <p className="text-sm text-muted-foreground">
                Real-time SEO scoring and optimization suggestions
              </p>
            </div>
            <div className="text-center space-y-4">
              <FileText className="h-12 w-12 mx-auto text-primary" />
              <h3 className="text-lg font-semibold">Rich Editor</h3>
              <p className="text-sm text-muted-foreground">
                Professional text editing with formatting options
              </p>
            </div>
            <div className="text-center space-y-4">
              <Users className="h-12 w-12 mx-auto text-primary" />
              <h3 className="text-lg font-semibold">Export Options</h3>
              <p className="text-sm text-muted-foreground">
                Export to Word, copy to clipboard, and more
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}