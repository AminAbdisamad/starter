const title = "BlueCIT | Your Cybersecurity & Software Development Partner";
const description =
  "We are an innovative internet security & Software development consulting fırm that is dedicated to provide high quality services, strategic solutions, technical consulting, and data protection to businesses and organizations";

const SEO = {
  title,
  description,
  canonical: "https://bluecit.io",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://bluecit.io",
    title,
    description,
    images: [
      {
        url: "https://bluecit.io/images/og.png",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default SEO;
