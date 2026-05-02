import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SEO = ({ title, description, keywords, ogImage, ogType = "website" }) => {
  const location = useLocation();
  const baseUrl = "https://www.combosquare.in";
  const fullUrl = baseUrl + location.pathname;
  const defaultImage = baseUrl + "/og-image.jpg";

  useEffect(() => {
    document.title = title
      ? title + " | Combo Square"
      : "Combo Square | Tech Powered Career Hub";

    const setMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector('meta[' + attr + '="' + name + '"]');
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setLink = (rel, href) => {
      let el = document.querySelector('link[rel="' + rel + '"]');
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    const desc = description || "Combo Square - Tech Powered Career Hub. Internships, Courses, Hackathons & Job Alerts for students in Chennai.";
    const kw = keywords || "combo square, tech career, internship chennai, web development course, digital marketing, UI UX training, edtech chennai";
    const img = ogImage || defaultImage;

    setMeta("description", desc);
    setMeta("keywords", kw);
    setMeta("robots", "index, follow");
    setLink("canonical", fullUrl);

    setMeta("og:title", document.title, true);
    setMeta("og:description", desc, true);
    setMeta("og:url", fullUrl, true);
    setMeta("og:type", ogType, true);
    setMeta("og:image", img, true);
    setMeta("og:site_name", "Combo Square", true);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", document.title);
    setMeta("twitter:description", desc);
    setMeta("twitter:image", img);

  }, [title, description, keywords, ogImage, ogType, fullUrl, defaultImage]);

  return null;
};

export default SEO;