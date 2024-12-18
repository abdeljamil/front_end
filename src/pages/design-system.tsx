//COMPONETS
import { Container } from "@/ui/components/container/container";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/seo";

//DESIGN SYSTEM
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";
//ICO
import {  RiUser6Fill } from "react-icons/ri";



export default function DesignSystem(){
    return(

        <>
       
        <Seo title="Design systeme" descripion=" Description...." />
        <Navigation /> 
  
  
        <Container className=" py-10 space-y-10">
  
  
          <div className="flex items-center gap-4 p-10">
            <Spinner size="small" />
            <Spinner />
            <Spinner size="large" />
          </div>
          <div className="flex items-center gap-4 p-10">
            <Button>Accent</Button>
            <Button
              size="medium"
              icon={{ icon: RiUser6Fill }}
              iconPosition="left"
            >Accent</Button>
            <Button
              size="large"
              icon={{ icon: RiUser6Fill }}
            >Accent</Button>
            <Button variant="secondary">secondary</Button>
            <Button variant="outline">Accent</Button>
            <Button variant="disabled" disabled>Accent</Button>
            <Button size="small" variant="ico" icon={{ icon: RiUser6Fill }} />
          </div>
  
          <div className="flex items-center gap-4 p-10">
            <Button>Accent</Button>
            <Button size="small" variant="secondary">secondary</Button>
            <Button size="small" variant="outline">Accent</Button>
            <Button size="small" variant="disabled" disabled>Accent</Button>
            <Button variant="ico" icon={{ icon: RiUser6Fill }} />
          </div>
  
          <div className="flex items-center gap-4 p-10">
            <Button>Accent</Button>
            <Button size="large" variant="secondary">secondary</Button>
            <Button size="large" variant="outline">Accent</Button>
            <Button size="large" variant="disabled" disabled>Accent</Button>
            <Button
              size="large"
              variant="ico"
              icon={{ icon: RiUser6Fill }}
              iconTheme="secondary"
            />
            <Button
              size="large"
              variant="ico"
              icon={{ icon: RiUser6Fill }}
              iconTheme="gray"
            />
            <Button
              size="large"
              variant="ico"
              icon={{ icon: RiUser6Fill }}
            />
  
          </div>
  
  
  
  
  
  
  
  
          <div className="flex items-center gap-4 p-10">
            <Button isLoading>Accent</Button>
            <Button isLoading size="large" variant="secondary">secondary</Button>
            <Button isLoading size="large" variant="outline">Accent</Button>
            <Button isLoading size="large" variant="disabled" disabled>Accent</Button>
            <Button
              size="large"
              variant="ico"
              icon={{ icon: RiUser6Fill }}
              iconTheme="secondary"
            />
            <Button
              size="large"
              variant="ico"
              icon={{ icon: RiUser6Fill }}
              iconTheme="gray"
            />
            <Button
              size="large"
              variant="ico"
              icon={{ icon: RiUser6Fill }}
            />
  
          </div>
  
  
  
  
  
          <div className="space-y-4 p-10">
            <Typography theme="primary" variant="body-lg" Component="h1">
              coders Monkers
            </Typography>
            <Typography theme="secondary" variant="h1" Component="div">
              coders Monkers
            </Typography>
            <Typography variant="lead" Component="div">
              coders Monkers
            </Typography>
            <Typography variant="body-sm" Component="div">
              coders Monkers
            </Typography>
            <Typography variant="body-lg" Component="div">
              coders Monkers
            </Typography>
            <Typography variant="caption4" Component="div">
              coders Monkers
            </Typography>
            <Typography variant="caption4" weigth="medium" Component="div">
              coders Monkers
            </Typography>
          </div>
  
          <div className="space-y-2">
            <Typography variant="caption2" weigth="medium" >
              Avatar
            </Typography>
            <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
              <Avatar src="/assets/images/img.jpg" alt="avatar de daniel Lincoln" />
              <Avatar  src="/assets/images/img.jpg" size="small" alt="avatar de daniel Lincoln" />
              <Avatar  src="/assets/images/img.jpg" size="medium" alt="avatar de daniel Lincoln" />
              <Avatar  src="/assets/images/img.jpg" size="large" alt="avatar de daniel Lincoln" />
            </div>
          </div>
  
  
          <div className="space-y-2">
            <Typography variant="caption2" weigth="medium">
              logo
            </Typography>
            <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
              <Logo size="very-small" />
              <Logo size="small" />
              <Logo />
              <Logo size="large" />
            </div>
          </div>
  
        </Container>
        </>
    )
}