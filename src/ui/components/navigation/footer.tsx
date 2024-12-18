import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "../container/container";
import Image from "next/image";
import { footerApplicationLinks, footerUserLinks } from "./app-links";
import { v4 as uuid4 } from "uuid";
import { ActiveLink } from "./active-link";
import { link } from "fs";
import { AppLinks } from "@/types/app-links";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerNavigationList = footerApplicationLinks.map((element) => (
    <div key={uuid4()}>{element.label}</div>
  ));

  return (
    <div className="bg-gray">
      <div className="flex bg-gray justify-between pt-16">
        <div className="flex bg-gray flex-col items-center gap-1">
          <Typography variant="caption1" theme="gray" weigth="medium">
            Formations gratuites
          </Typography>
          <Typography variant="caption3" theme="gray">
            Abonne-toi à la chaine
          </Typography> 
          <a href="httpps://youtube.com/@remotemonker" target="_blank">
            <Image
              src="/assets/svg/icons8-youtube-squared.svg"
              width={229}
              height={216}
              alt="Remote Monkers | youtube"
            />
          </a>
        </div>
        <div className="">
          <FooterLink data={footerApplicationLinks} />
          <FooterLink data={footerUserLinks} />
        </div>
      </div>
      <div className="bg-gray pt-9 pb-11 space-y-11">
        <hr className="text-gray-800" />
        <div className="flex items-center justify-between">
          <Typography variant="caption4" theme="gray">
            {`copyright ${currentYear} | Propulsed by`}{" "}
            <a
              href="https://arnaud-desportes.fr"
              target="_blank"
              className="underline"
            >
              Arnaud desportes
            </a>
            {`Remote monkey SASU`}
          </Typography>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

interface footerLinkProps {
  data: AppLinks[];
}

const FooterLink = ({ data }: footerLinkProps) => {
  const linkList = data.map((link) => (
    <div key={uuid4()}>
      {link.type === "internal" && (
        <ActiveLink key={uuid4()} href={link.baseUrl}>
          {link.label}
        </ActiveLink>
      )}
      {link.type === "external" && (
        <a href={link.baseUrl} target="_blank">
          {link.label}
        </a>
      )}
      {/* <div key={uuid4()}>{link.label}</div> */}
    </div>
  ));

  return (
    <div className="min-w-[190px]">
      <Typography
        theme="gray"
        variant="caption2"
        weigth="medium"
        className="pb-5"
      >
        type
      </Typography> 
      <Typography theme="gray" variant="caption3" className="space-y-4">
        {linkList}
      </Typography>
    </div>
  );
};
