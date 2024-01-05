import type { CTA, Image as ImageType } from "@yext/types";
import { Image, Link } from "@yext/sites-components";
import c from "classnames";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MaybeLink } from "src/components/common/MaybeLink";

type HeaderProps = {
  links: CTA[];
  logo?: ImageType;
  logoLink?: string;
};

const Header = (props: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logo, logoLink, links } = props;

  return (
    <header className="relative" style={{ height: '80px', overflow: 'hidden' }}>
      <div className="container py-5 flex justify-start md:justify-between" style={{ width: '1170px' }}>
        <div>
          <p style={{
            fontSize: '13px',
            lineHeight: '23px',
            letterSpacing: '0.1em',
            fontWeight: '400',
            marginTop: '15px',
            color: '#808080'
          }}>
            ブランド品の高価買取なら<br />創業76年上場企業のKOMEHYOへ
          </p>
        </div>

        {logo && (
          <a href={logoLink}>
            <div className="flex w-[144px] mr-2">
              <Image image={logo} layout="fill" />
            </div>
          </a>
        )}

        {/* ここに追加のナビゲーションリンクや他の要素を追加 */}
      </div>
    </header>
  );
};

export { Header };
