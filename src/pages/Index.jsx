import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="text-center py-10 bg-gray-100">
        <img
          src="/placeholder.svg"
          alt="10 Downing Street"
          className="mx-auto object-cover w-full h-[400px]"
        />
        <h1 className="text-4xl font-bold mt-4">Prime Minister's Office, 10 Downing Street</h1>
        <p className="text-xl mt-2">The official residence and the office of the British Prime Minister</p>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">About the Prime Minister</h2>
        <p>
          The Prime Minister of the United Kingdom is the head of government of the United Kingdom. The Prime Minister directs both the executive and the legislature, and together with the Prime Minister's Cabinet, is accountable to the monarch, to Parliament, to their party, and ultimately to the electorate, for the policies and actions of the executive and the legislature.
        </p>
      </section>

      {/* News Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Latest News</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>News Title 1</CardTitle>
              <p className="text-sm text-gray-500">Date: 2023-10-01</p>
            </CardHeader>
            <CardContent>
              <p>Short description of the news article. This is a brief summary of the news content.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>News Title 2</CardTitle>
              <p className="text-sm text-gray-500">Date: 2023-09-25</p>
            </CardHeader>
            <CardContent>
              <p>Short description of the news article. This is a brief summary of the news content.</p>
            </CardContent>
          </Card>
          {/* Add more news items as needed */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Contact the Prime Minister's Office</h2>
        <form className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your Name" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your Email" />
          </div>
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Subject" />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your Message" />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 py-4 mt-10">
        <div className="container mx-auto px-4 text-center">
          <Separator className="my-4" />
          <p className="text-sm">
            <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a> | 
            <a href="/terms-of-service" className="text-blue-600 hover:underline"> Terms of Service</a> | 
            <a href="/accessibility-statement" className="text-blue-600 hover:underline"> Accessibility Statement</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;