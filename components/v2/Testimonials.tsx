import Image from "next/image";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: "Caitlin Murphy",
    title: "CEO, Ship Global Gateway",
    quote:
      '"You could not be in better hands, the Flipspaces\'s team went above & beyond our expectations, we changed our layouts several times, they never complained, especially the design team, they helped me so much with great design inputs, bringing furniture options & alternative solutions for every construction restriction. What I loved the most, was their 3D software that allowed me to walk through and see how the space would look with all the furniture, windows, floors, lighting, it was really a game changer."',
    image:
      "https://www.flipspaces.com/assets/images/uploads/images/1698218109_9e8c3b241ed7ece616f2.jpg",
  },
  {
    name: "Vivek Khemani",
    title: "Founder, Quantiphi",
    quote:
      '“Flipspaces came in as an one-stop solution for all our oﬃce expansion needs. They understood what we needed from the outset. They were prompt in understanding our requirements and turned it into something amazing. What stands them apart is the Virtual Reality Technology that helped us visualize the future oﬃce space and make changes in real time, thus saving a lot of our time."',
    image:
      "https://www.flipspaces.com/assets/images/uploads/images/1698218149_94834873a09427ecaab8.jpg",
  },
  {
    name: "Pankaj Tripathi",
    title: "GM - Commercial & Administration, B/S/H, Bangalore",
    quote:
      '"Flipspaces designed four of our offices - Mumbai, Hyderabad, Chennai and Bangalore. All the offices are beautifully made with open space seating arrangement, giving a perception of a bigger space, something we tried for the first time. There is an ample amount of natural light that flows in and the designs made it look like a new generation office. It is full of youthfulness and gives out positive vibes to the employees"',
    image:
      "https://www.flipspaces.com/assets/images/uploads/images/1698218180_20a39239d82f98d8aa4f.jpg",
  },
  {
    name: "Vishal Shah",
    title: "Director and Chief Executive Office, Talakunchi",
    quote:
      '"Right from understanding our expectations to the design and execution of the entire project, Flipspaces handled everything with utmost professionalism. A big thank you to Moshin, Utsav, and Akash for ensuring that all our inputs were carefully considered and implemented on time. The Vizdom App provided clear, detailed, and timely project updates easily the best user experience we\'ve had so far. A special shout out to the Snag Team led by Dhananjay for efficiently wrapping up the final touches and addressing all pending tasks. We are extremely happy with the outcome."',
    image:
      "https://www.flipspaces.com/assets/images/uploads/images/Vishal_Shah.jpg",
  },
  {
    name: "Pravithra Poojari",
    title: "MMS Maritime",
    quote:
      "\"We'd like to share our positive experience with Mr. Dhananjay and the snag team at Flipspaces. Every issue we've encountered has been addressed promptly and with great professionalism. Dhananjay's continued support, responsiveness, and dedication have been truly commendable. Even after completion, he remains approachable and ready to assist with any follow up needs or clarifications. It's been a pleasure working with such a committed team.\"",
    image:
      "https://www.flipspaces.com/assets/images/uploads/images/Pavithra_Poojari.jpg",
  },
];

const TestimonialCard = ({
  testimonial,
  reverse,
}: {
  testimonial: Testimonial;
  reverse: boolean;
}) => {
  const { name, title, quote } = testimonial;
  return (
    <motion.div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-center gap-8 lg:gap-16`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="md:w-4/12 flex-shrink-0 flex justify-center">
        <motion.div
          className="w-[220px] h-[220px] lg:w-[250px] lg:h-[250px] bg-brand-accent rounded-full flex items-center justify-center p-2.5"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src={"/profile_code.png"}
            alt={`Photo of ${name}`}
            width={230}
            height={230}
            className="rounded-full object-cover w-full h-full"
          />
        </motion.div>
      </div>
      <motion.div
        className="md:w-8/12"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <div className="relative p-8 lg:p-12">
          <div className="absolute inset-0 bg-brand-accent rounded-[50px]"></div>
          <div className="relative z-10 flex flex-col gap-4">
            <Quote className="w-12 h-12 text-brand-primary" strokeWidth={1.5} />
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-dark-gray">{name}</h3>
              <p className="text-base text-dark-gray">{title}</p>
            </div>
            <p className="text-base text-neutral-gray leading-relaxed">
              {quote}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="container">
        <div className="space-y-24">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
