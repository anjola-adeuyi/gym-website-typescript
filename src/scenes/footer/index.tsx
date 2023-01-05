import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            We offer personal training, nutrition coaching, and other
            specialized services to help our members reach their goals. We
            believe that fitness is about more than just exercise - it's about
            building a supportive community and creating a healthy lifestyle.
          </p>
          <p>© GymHub All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Our story</p>
          <p className="my-5">Products</p>
          <p className="my-5">Classes</p>
          <p>Blog</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Contact us today to schedule a tour and find out more about the
            benefits of becoming a member at GymHub.
          </p>
          <p className="my-5">info@gymhub.com</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
