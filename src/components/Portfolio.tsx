import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "ShackApp",
      description: "A mobile application designed to help golfers easily find available tee times and connect with caddies for a smooth golfing experience. The app also streamlines the booking process, offering an intuitive user interface for a hassle-free interaction.",
      tags: ["ReactNative", "TypeScript", "Stripe"],
      image: "https://play-lh.googleusercontent.com/tQ0CZlNDskdVdXQea3e5s2_XS2bYGMd9JU0zmox0stLFy-gUX3ualAHf1MBoD61ORZVv=w240-h480-rw",
      liveUrl: "https://play.google.com/store/apps/details?id=com.apnitor.shackApp&hl=en_IN",
      githubUrl: "#"
    },
    {
      title: "RareImpacts",
      description: "An informative app that focuses on rare diseases and conditions, providing users with valuable information about precautionary measures, cures, and symptoms. The app also includes a search feature to help users easily find relevant information and categorize diseases effectively.",
      tags: ["ReactNative", "TypeScript", "Real-time"],
      image: "https://rareimpacts.org/_next/static/media/logo.13477db9.svg",
      liveUrl: "https://rareimpacts.org/",
      githubUrl: "#"
    },
{
  title: "Online Basket - Grocery App",
  description:
    "A full-scale grocery ordering app with dynamic shop-based product listings. Users can select their address, view available shops under that location, and browse categories & products that change based on the selected shop. Features secure authentication, cart management, Razorpay online payments, Cash on Delivery (COD), and real-time push notifications across the order lifecycle.",
  tags: ["Flutter", "Dart", "Razorpay", "Push Notifications", "E-commerce"],
  image: "https://play-lh.googleusercontent.com/DCcL_QCwALtjmX0d38exY_lHVgxsrJV7-kcTzacgaMyDU-Iel4wFVwbtaJotkMrbLNMu62ce4p8phtsXyxoWVg=w240-h480-rw",
  liveUrl: "https://play.google.com/store/apps/details?id=com.onlinebasket",
  githubUrl: "#"
},

{
  title: "Online Basket - Warehouse App",
  description:
    "A warehouse management app powering the backend operations of Online Basket. Enables staff to manage categories and products, process incoming orders, update order statuses (Packed, Assigned, Delivered), and assign delivery partners. Includes real-time notification flow — warehouse notified on new orders, users notified when packed, assigned, and delivered.",
  tags: ["Flutter", "Warehouse Management", "Order Processing", "Operations"],
  image: "https://play-lh.googleusercontent.com/jTxH4t41XhVMWFNlqBzjB2QMpY8Jvv91qmWZ-5b82uW-R-8GfbQpC33dmNuG6Lsj0-1YigCA1MrtvR1mzy59=w240-h480-rw",
  liveUrl: "https://play.google.com/store/apps/details?id=com.onlinebasketwarehouse",
  githubUrl: "#"
},

{
  title: "Online Basket - Delivery Partner App",
  description:
    "A last-mile delivery app with controlled onboarding and warehouse-specific assignment. Delivery partners register using their pincode, view available shops in that service area, choose a shop to register under, and wait for verification. After approval via email, they can log in and receive delivery assignments exclusively from their verified warehouse. Includes live order updates and real-time notifications.",
  tags: ["Flutter", "Delivery Management", "Last Mile", "Logistics"],
  image: "https://play-lh.googleusercontent.com/joR6CVVXpD8GA8bmRMn5fK8x1WgWKFEmJI0EA3eUJqfgNKAMmgpcgUv9SmZkm9TqhlVjoTejkH-KZPr312AV=w240-h480-rw",
  liveUrl: "https://play.google.com/store/apps/details?id=com.quickbasket.delivery",
  githubUrl: "#"
},
    {
      title: "Online Basket-Backend",
      description: "The backend of a grocery ordering app designed to handle user registration, login, product management, cart operations, and order processing. It ensures smooth integration with payment services and a user-friendly experience for both customers and administrators.",
      tags: ["Node.js", "MongoDB", "Razorpay"],
      image: "https://play-lh.googleusercontent.com/wm1OFLcRD7n-M2P7FnW2REEsIGg1BsA-u1hJlCeMA0ztHMZLmkMHBwrQtTnb_Gx3ybyo4vpTvSNXto5BDbSDAA=w526-h296-rw",
      liveUrl: "https://play-lh.googleusercontent.com/wm1OFLcRD7n-M2P7FnW2REEsIGg1BsA-u1hJlCeMA0ztHMZLmkMHBwrQtTnb_Gx3ybyo4vpTvSNXto5BDbSDAA=w526-h296-rw",
      githubUrl: "#"
    },
    {
  title: "Apnitor Attendance App",
  description: "The Apnitor Attendance App is an in-house attendance management solution designed to simplify employee time tracking. It supports real-time check-in and check-out, secure cloud-based data storage, and seamless synchronization across devices. Built with Flutter and Firebase, the app features a clean, Material Design–inspired interface for efficient attendance monitoring and management.",
  tags: ["Flutter", "Dart", "Firebase"],
  image: "https://apnitor.com/img/logo.png",
  liveUrl: "#",
  githubUrl: "#"
},
{
  title: "Massive Danamik Attendance App",
  description: "The Massive Danamik Attendance App is a custom-developed, real-time attendance tracking solution built for client use. It includes smart check-in and check-out logic, reliable cloud data storage, and instant data synchronization. Developed using Flutter and Firebase, the app delivers a responsive, Material Design–inspired UI for intuitive workforce attendance management.",
  tags: ["Flutter", "Dart", "Firebase"],
  image: "https://play-lh.googleusercontent.com/dgryS04tIUrOxJarhcUtZsvq2PJQklnohjy0ML30Hj2CU4xiVLT9Wjvki7rY0jswJthFOQSkSIbkMvx_ASZtkw=w240-h480-rw",
  liveUrl: "https://play.google.com/store/apps/details?id=com.apnitor.massivedynamic",
  githubUrl: "#"
},
    {
      title: "IRH-Backend",
      description: "A backend system developed to handle a role-based user management system with RESTful APIs. It provides features like user authentication, file handling, and CRUD operations, ensuring secure and efficient management of user data and access control.",
      tags: ["Python", "FastAPI", "MySql", "SqlAlchemy"],
      image: "https://portal.irhliving.com/uploads/app/logo.png",
      liveUrl: "https://portal.irhliving.com/",
      githubUrl: "#"
    },
    {
      title: "Property Fusion-Backend",
      description: "A role-based backend management system designed to handle user authentication, file upload management, and CRUD operations. The system ensures modularity and scalability, allowing for easy integration with other services and efficient user data management.",
      tags: ["Python", "FastAPI", "MySql", "SqlAlchemy"],
      image: "https://i0.wp.com/propertyfusion.io/wp-content/uploads/2024/09/header-prop-fusion.png?resize=1024%2C586&ssl=1", 
      liveUrl: "http://dev.propertyfusion.io/",
      githubUrl: "#"
    },
    {
      title: "FriendSphere Chatting App",
      description: "A real-time chat application that allows users to instantly communicate with their friends, see their online status, and send messages live. The app includes WebSocket support for seamless communication and a Django-based interface for managing user data and chat functionality.",
      tags: ["Python", "Django", "MongoDb", "WebSocket"],
      image: "data:image/jpeg;base64,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",
      liveUrl: "https://friendsphere-chatapp.onrender.com/",
      githubUrl: "https://github.com/Mdkaifee/Friendsphere"
    },
   {
  title: "Simple Starts Co Fitness App",
  description:
    "A Flutter fitness app featuring OTP login via email and OTP verification. Includes a workout library with video content and plan-based access control. Tracks macros (calories, fats, proteins, carbs), water intake, weight, progress photos, and food logs using Open Food Facts or manual entry.",
  tags: ["Flutter", "Dart", "Open Food Facts", "Plan-based Access"],
  image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
  liveUrl: "#",
  githubUrl: "#"
},
{
  title: "Simple Starts Admin Panel",
  description:
    "A React-based admin dashboard to manage registered users, upload workout videos, create plans shown in the app, manage foods/categories using USDA data, add meals/products, send admin notifications, manage legal documents, and view analytics via dashboards and charts.",
  tags: ["React", "Admin Dashboard", "Charts", "USDA"],
  image: "https://www.simplestartsco.com/cdn/shop/files/LOGO.png?v=1753370847&width=260",
  liveUrl: "https://dev.glowante.com",
  githubUrl: "#"
},
{
  title: "Simple Starts Backend",
  description:
    "FastAPI backend powering both the Flutter app and React admin panel. Provides authentication, plan-based access, workout library APIs, macro/water/weight tracking, progress photos, food logging, and media handling with DigitalOcean Spaces for video and thumbnail uploads.",
  tags: ["Python", "FastAPI", "DigitalOcean Spaces", "REST APIs"],
  image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
  liveUrl: "#",
  githubUrl: "#"
},
{
  title: "Glowante Partner - Salon Booking App",
  description:
    "A Flutter partner app for salon owners and staff. Supports OTP-based signup/login, booking management, adding services/categories/subcategories, manual walk-in bookings, branch management, staff management, staff attendance, and overall salon operations in one place.",
  tags: ["Flutter", "Dart", "OTP Auth", "Bookings", "Staff & Branch Management"],
  image: "https://glowante.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.9777728b.png&w=256&q=100",
  liveUrl: "https://glowante.com/",
  githubUrl: "#"
},
{
  title: "MenuStudio – Digital QR Menu",
  description: "A QR-based digital menu management system for restaurants. Built with FastAPI, MongoDB, and React, it allows admins to create categories, add items, upload templates, and generate shareable QR codes. Customers can scan and instantly view live menus without any app installation.",
  tags: ["FastAPI", "React", "MongoDB", "SaaS", "QR Generator"],
  image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop",
  liveUrl: "https://menustudio.onrender.com/",
  githubUrl: "#"
},
    {
  title: "Indian Jeera – Lightweight Jira-Style Workspace",
  description: "Indian Jeera is a lightweight Jira-inspired project management platform designed for small teams and side projects. It features secure authentication, workspace creation with customizable boards and columns, task management with drag-and-drop functionality, and token-based collaborator access control. Built to simplify agile workflows with a clean and minimal interface.",
  tags: ["FastAPI", "React", "MongoDB", "JWT Auth", "Project Management"],
  image: "https://cdn.dribbble.com/userupload/41893103/file/original-9dc4240e828e04c6d7a11eb1d9f1bdf4.jpg?resize=400x300",
  liveUrl: "https://indian-jeera.onrender.com",
  githubUrl: "#"
},
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills in FullStack development, 
            design, and problem-solving. Each project represents a unique challenge 
            and learning opportunity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card border-0 hover-lift group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6">
  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
    {project.title}
  </h3>
  
  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
    {project.description}
  </p>
  
  <div className="flex flex-wrap gap-2 mb-6">
    {project.tags.map((tag, tagIndex) => (
      <span 
        key={tagIndex}
        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
      >
        {tag}
      </span>
    ))}
  </div>
  
<div className="flex gap-3">
  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
    <Button 
      size="sm" 
      className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity flex-1"
    >
      <ExternalLink className="w-4 h-4 mr-2" />
      Live Demo
    </Button>
  </a>

  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
    <Button 
      size="sm" 
      variant="outline"
      className="border-primary/30 hover:border-primary hover:bg-primary/10"
    >
      <Github className="w-4 h-4" />
    </Button>
  </a>
</div>

</CardContent>

            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
