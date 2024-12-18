import Head from "next/head";

interface Props {
    title: string;
    descripion: string;
}

export const Seo = ({ title, descripion }: Props) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description"
                    content={descripion}
                />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="/favicons.ico" />
            </Head>
        </>
    )
}