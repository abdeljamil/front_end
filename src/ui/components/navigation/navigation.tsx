import { Button } from "@/ui/design-system/button/button"
import { Logo } from "@/ui/design-system/logo/logo"
import { Typography } from "@/ui/design-system/typography/typography"
import Link from "next/link"
import { Container } from "../container/container"
import { ActiveLink } from "./active-link"

interface Props { }

export const Navigation = ({ }: Props) => {
    return (
        <div className="border-b-2 border-gray-400">
            <div className="flex items-center justify-between py-1.5 gap-7">
                <Link href="/">
                    <div className="flex items-center gap-2.5">
                        <Logo size="small" />
                        <div className="flex flex-col">
                            <div className="text-gray font-extrabold text-[24px]">
                                Coders Monkeys
                            </div>
                            <Typography
                                variant="caption4"
                                Component="span"
                                theme="gray"
                            >
                                Trouve de l'inspiration & reçois des feelbacks!
                            </Typography>
                        </div>
                    </div>
                </Link>
                <div className="flex items-center gap-7">
                    <Typography variant="caption3" Component="div" className="flex items-center gap-7">
                        <ActiveLink href="/design-system">Design system</ActiveLink>
                        <ActiveLink href="/projets">Projets</ActiveLink>
                        <ActiveLink href="/formation">Formations</ActiveLink>
                        <ActiveLink href="/contact">Contact</ActiveLink>
                    </Typography>
                    <div className="flex items-center gap-2">
                        <Button size="small">Connexion</Button>
                        <Button size="small" variant="secondary">Rejoindre</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}