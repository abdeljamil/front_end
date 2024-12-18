import { Container } from "@/ui/components/container/container";
import { Footer } from "@/ui/components/navigation/footer";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/seo";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";

import { RiGovernmentFill, RiUser6Fill, RiUser6Line } from "react-icons/ri";





export default function Home() {
  return (

    <>
      <Seo title="Coders Monkeys" descripion=" Description...." />
      <Navigation />
      <Footer />
    </>
  );
}
