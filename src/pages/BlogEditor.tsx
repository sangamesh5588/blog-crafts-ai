import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Header } from "@/components/Header";
import { Save, Download, Copy, Sparkles, BarChart3 } from "lucide-react";

export default function BlogEditor() {
  const [topic, setTopic] = useState("");
  const [keywords, setKeywords] = useState("");
  const [content, setContent] = useState("");
  const [seoScore] = useState(72);

  const seoMetrics = [
    { label: "Word Count", value: "847", target: "800-1200", status: "good" },
    { label: "Keyword Density", value: "2.3%", target: "1-3%", status: "good" },
    { label: "Headings", value: "H1:1, H2:3, H3:2", target: "Structured", status: "good" },
    { label: "Meta Description", value: "142 chars", target: "120-160", status: "good" },
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Editor */}
          <div className="lg:col-span-3 space-y-6">
            {/* Topic & Keywords Input */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  AI Blog Generator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="topic">Blog Topic</Label>
                    <Input
                      id="topic"
                      placeholder="Enter your blog topic..."
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="keywords">Keywords (comma-separated)</Label>
                    <Input
                      id="keywords"
                      placeholder="SEO, blog writing, content marketing"
                      value={keywords}
                      onChange={(e) => setKeywords(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="premium" disabled={!topic}>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Generate Outline
                  </Button>
                  <Button variant="outline" disabled={!topic}>
                    Generate Full Blog
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Blog Content Editor */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle>Blog Content</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Save className="h-4 w-4 mr-2" />
                    Save Draft
                  </Button>
                  <Button variant="outline" size="sm">
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export .docx
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Blog Title</Label>
                    <Input
                      id="title"
                      placeholder="Your compelling blog title..."
                      className="text-lg font-semibold"
                    />
                  </div>
                  <div>
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      placeholder="Start writing your blog content here... 

Use this space to craft your blog post. When you connect to Supabase, this will become a rich text editor with formatting options."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="min-h-[400px] resize-none"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* SEO Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  SEO Score
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* SEO Score Circle */}
                <div className="text-center space-y-4">
                  <div className="relative w-24 h-24 mx-auto">
                    <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-glow">
                      {seoScore}%
                    </div>
                  </div>
                  <Progress value={seoScore} className="w-full" />
                  <p className="text-sm text-muted-foreground">
                    {seoScore >= 80 ? "Excellent" : seoScore >= 60 ? "Good" : "Needs Improvement"}
                  </p>
                </div>

                {/* SEO Metrics */}
                <div className="space-y-4">
                  <h4 className="font-semibold">SEO Checklist</h4>
                  {seoMetrics.map((metric, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{metric.label}</span>
                        <div className={`w-2 h-2 rounded-full ${
                          metric.status === 'good' ? 'bg-green-500' :
                          metric.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                        }`} />
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {metric.value} • Target: {metric.target}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Button variant="premium" className="w-full">
                  Optimize SEO
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}