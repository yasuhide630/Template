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
<footer>
      <div className="bg-gray-200">
        <ul className="flex flex-wrap">
          <li className="list-none"><a href="https://www.komehyo.co.jp" className="text-sm font-normal text-blue-800 block underline relative after:content-['>']">KOMEHYO</a></li>
          <li className="list-none"><a href="https://komehyo.jp/kaitori/" className="text-sm font-normal text-blue-800 block underline relative after:content-['>']">買取トップページ</a></li>
          <li className="list-none"><a href="https://komehyo.jp/kaitori/category/jewelry/" className="text-sm font-normal text-blue-800 block underline relative after:content-['>']">ブランドジュエリー買取</a></li>
          <li className="list-none"><a href="https://komehyo.jp/kaitori/category/brand-bag/" className="text-sm font-normal text-blue-800 block underline relative after:content-['>']">ブランドバッグ買取</a></li>
          <li className="list-none"><a href="https://komehyo.jp/kaitori/category/watch/" className="text-sm font-normal text-blue-800 block underline relative after:content-['>']">時計買取</a></li>
          <li className="list-none"><a href="https://komehyo.jp/kaitori/category/brand-apparel/" className="text-sm font-normal text-blue-800 block underline relative after:content-['>']">ブランド衣料買取</a></li>
        </ul>
      </div>
      <div className="mb-6">
        <div className="flex flex-wrap justify-between">
          <p className="text-blue-800 text-lg tracking-widest leading-7 mb-2">KOMEHYOは古物営業法に基づく<br className="hidden" />古物商の許可を得ております。
            <span className="text-sm tracking-widest font-normal text-gray-800 block">愛知県公安委員会許可 第541162007700号</span>
          </p>
          <ul className="flex flex-wrap">
            <li className="w-20 ml-5 list-none"><img src="https://komehyo.jp/kaitori/img/footer_logo01.jpg" alt="" className="align-bottom w-full h-auto"/></li>
            <li className="w-20 ml-5 list-none"><img src="https://komehyo.jp/kaitori/img/footer_logo02.jpg" alt=""  className="align-bottom w-full h-auto"/></li>
          </ul>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="inner">
          <div className="w-64 mb-8"><a href={logoLink}></div>
          <ul className="other_nav">
            <li className="float-left list-none"><a href="https://www.komehyo.co.jp/corporate.html" className="text-sm font-normal block relative">企業情報</a></li>
            <li className="inline"><a href="https://www.komehyo.co.jp/privacypolicy" className="text-sm font-normal block relative">個人情報保護方針</a></li>
            <li className="float-left list-none"><a href="https://www.komehyo.co.jp/privacypolicy2" className="text-sm font-normal block relative">個人番号及び特定個人情報の適正な取扱いに関する基本方針</a></li>
          </ul>
          <p className="font-normal tracking-widest text-gray-700 float-right">Copyright © Komehyo Co.,Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };