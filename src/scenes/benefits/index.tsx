import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "At GymHub, we pride ourselves on offering the best facilities and equipment to our members. Our gym is outfitted with top-of-the-line cardio and strength-training machines, as well as a wide selection of free weights and functional fitness equipment. We believe that the right tools are essential to help our members reach their fitness goals.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "In addition to our traditional workout area, we also have a spacious yoga, Pilates studio and diverse Classes, as well as a functional training zone and a dedicated group fitness room. Our studios are equipped with top-quality mats, props, and other materials to ensure a comfortable and effective workout.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Whether you're looking for one-on-one personal training or group fitness classes, our trainers are here to support you every step of the way. They will work with you to create a customized plan that is tailored to your specific needs and goals. Our trainers are all certified and have completed extensive training in their respective fields.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="sm:w-full md:my-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-lg">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member. In addition to our regular class
            schedule, we also offer personal training, nutrition coaching, and
            other specialized services to help our members reach their goals. We
            believe that fitness is about more than just exercise - it's about
            building a supportive community and creating a healthy lifestyle.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                At GymHub, we are proud to have helped millions of people reach
                their fitness goals. Our members come from all walks of life and
                have a wide range of goals, from weight loss to muscle building
                to general wellness. No matter what your goals may be, we have
                the tools and resources to help you succeed.
              </p>
              <p className="mb-5">
                Our facilities are equipped with top-quality cardio and
                strength-training equipment, as well as a wide range of classes
                and specialized programs to suit every fitness level and
                preference. Our team of expert trainers is always available to
                provide guidance and support, whether you prefer one-on-one
                training or group fitness classes.
              </p>
              <p className="mb-5">
                We believe that fitness is about more than just exercise - it's
                about building a supportive community and creating a healthy
                lifestyle. That's why we have created a welcoming and inclusive
                environment at GymHub, where everyone is welcome and encouraged
                to be their best selves.
              </p>
              <p className="mb-5">
                Join the millions of happy members who have gotten fit at
                GymHub, and start your own fitness journey today. We can't wait
                to help you reach your goals and lead a healthier, happier life.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
