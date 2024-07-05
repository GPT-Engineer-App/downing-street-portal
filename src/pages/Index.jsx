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
          src="/images/rishi-sunak.jpg"
          alt="Rishi Sunak"
          className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
        />
        <h1 className="text-4xl font-bold mt-4">Prime Minister Rishi Sunak</h1>
        <p className="text-xl mt-2">Leading the United Kingdom with vision and integrity</p>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">About Rishi Sunak</h2>
        <p>
          Rishi Sunak is the Prime Minister of the United Kingdom, known for his dedication to public service and his vision for a prosperous and inclusive nation. With a background in finance and a commitment to innovation, he has been instrumental in driving economic growth and fostering a culture of opportunity for all citizens.
        </p>
        <p className="mt-4">
          Achievements:
          <ul className="list-disc list-inside">
            <li>Implemented significant economic reforms to boost growth</li>
            <li>Advocated for sustainable and green energy solutions</li>
            <li>Strengthened international relations and trade partnerships</li>
          </ul>
        </p>
      </section>

      {/* News Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Latest News</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Rishi Sunak Announces New Economic Plan</CardTitle>
              <p className="text-sm text-gray-500">Date: 2023-10-01</p>
            </CardHeader>
            <CardContent>
              <p>Prime Minister Rishi Sunak has unveiled a comprehensive economic plan aimed at fostering growth and innovation across the United Kingdom.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>UK to Lead in Green Energy Initiatives</CardTitle>
              <p className="text-sm text-gray-500">Date: 2023-09-25</p>
            </CardHeader>
            <CardContent>
              <p>In a bold move towards sustainability, Rishi Sunak has announced new policies to position the UK as a leader in green energy solutions.</p>
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