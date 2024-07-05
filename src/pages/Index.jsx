import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Container, Flex, Box, Heading, Text, Image, VStack, HStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="text-center py-10 bg-gray-100">
        <AspectRatio ratio={16 / 9}>
          <Image
            src="/images/rishi-sunak.jpg"
            alt="Rishi Sunak"
            className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
          />
        </AspectRatio>
        <Heading as="h1" size="2xl" mt={4}>Prime Minister Rishi Sunak</Heading>
        <Text fontSize="xl" mt={2}>Leading the United Kingdom with vision and integrity</Text>
      </section>

      {/* About Section */}
      <Container maxW="container.lg" px={4}>
        <Heading as="h2" size="xl" mb={4}>About Rishi Sunak</Heading>
        <Text>
          Rishi Sunak is the Prime Minister of the United Kingdom, known for his dedication to public service and his vision for a prosperous and inclusive nation. With a background in finance and a commitment to innovation, he has been instrumental in driving economic growth and fostering a culture of opportunity for all citizens.
        </Text>
        <Text mt={4}>
          Achievements:
          <ul className="list-disc list-inside">
            <li>Implemented significant economic reforms to boost growth</li>
            <li>Advocated for sustainable and green energy solutions</li>
            <li>Strengthened international relations and trade partnerships</li>
          </ul>
        </Text>
      </Container>

      {/* News Section */}
      <Container maxW="container.lg" px={4}>
        <Heading as="h2" size="xl" mb={4}>Latest News</Heading>
        <VStack spacing={4}>
          <Card>
            <CardHeader>
              <CardTitle>Rishi Sunak Announces New Economic Plan</CardTitle>
              <Text fontSize="sm" color="gray.500">Date: 2023-10-01</Text>
            </CardHeader>
            <CardContent>
              <Text>Prime Minister Rishi Sunak has unveiled a comprehensive economic plan aimed at fostering growth and innovation across the United Kingdom.</Text>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>UK to Lead in Green Energy Initiatives</CardTitle>
              <Text fontSize="sm" color="gray.500">Date: 2023-09-25</Text>
            </CardHeader>
            <CardContent>
              <Text>In a bold move towards sustainability, Rishi Sunak has announced new policies to position the UK as a leader in green energy solutions.</Text>
            </CardContent>
          </Card>
          {/* Add more news items as needed */}
        </VStack>
      </Container>

      {/* Contact Section */}
      <Container maxW="container.lg" px={4}>
        <Heading as="h2" size="xl" mb={4}>Contact the Prime Minister's Office</Heading>
        <form className="space-y-4">
          <Box>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your Name" />
          </Box>
          <Box>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your Email" />
          </Box>
          <Box>
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Subject" />
          </Box>
          <Box>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your Message" />
          </Box>
          <Button type="submit">Submit</Button>
        </form>
      </Container>

      {/* Footer */}
      <footer className="bg-gray-200 py-4 mt-10">
        <Container maxW="container.lg" px={4} textAlign="center">
          <Separator className="my-4" />
          <Text fontSize="sm">
            <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a> | 
            <a href="/terms-of-service" className="text-blue-600 hover:underline"> Terms of Service</a> | 
            <a href="/accessibility-statement" className="text-blue-600 hover:underline"> Accessibility Statement</a>
          </Text>
        </Container>
      </footer>
    </div>
  );
};

export default Index;