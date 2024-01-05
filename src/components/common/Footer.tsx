import type { CTA } from "@yext/types";
import { Link } from "@yext/sites-components";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

interface FooterProps {
  copyrightMessage: string;
  youtube?: string;
  linkedIn?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  footerLinks: CTA[];
}

const Footer = (props: FooterProps) => {
  const copyrightMessage = props.copyrightMessage;

  const socialLinks = [
    { link: props.facebook, label: <FaFacebook className="w-5 h-5 mr-4" /> },
    { link: props.instagram, label: <FaInstagram className="w-5 h-5 mr-4" /> },
    { link: props.youtube, label: <FaYoutube className="w-5 h-5 mr-4" /> },
    { link: props.linkedIn, label: <FaLinkedinIn className="w-5 h-5 mr-4" /> },
    { link: props.twitter, label: <FaTwitter className="w-5 h-5 mr-4" /> },
  ].filter((link) => link.link);

  const footerLinks = props.footerLinks || [];

  return (
    <footer className="bg-gray-200 py-8 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex flex-col sm:flex-row items-center">
            {footerLinks.map((link, i) => (
              <Link
                className="text-blue-700 underline py-1 px-4 m-2 border-r border-gray-300"
                key={i}
                href={link.url}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="my-4 sm:my-0 flex flex-row items-center justify-center sm:justify-end">
            {socialLinks.map((socialLink, i) =>
              socialLink.link ? (
                <Link
                  className="text-blue-700 underline py-1 px-4 m-2"
                  key={i}
                  href={socialLink.link}
                >
                  {socialLink.label}
                </Link>
              ) : null
            )}
          </div>
        </div>

        <div className="text-sm text-center sm:text-left mt-4 text-gray-600">
          {copyrightMessage}
        </div>
      </div>
    </footer>
  );
};

export { Footer };