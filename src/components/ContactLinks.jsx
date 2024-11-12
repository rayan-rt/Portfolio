import { ContactLinkItem } from "./index";
import { contactLinksData } from "../data/contact_links";

const ContactLinks = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold underline underline-offset-8 decoration-4 mb-8 text-stone-900 dark:text-white">
        Contact Links
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {contactLinksData.map((item, i) => (
          <ContactLinkItem key={i} name={item.name} url={item.url} />
        ))}
      </div>
    </div>
  );
};

export default ContactLinks;
