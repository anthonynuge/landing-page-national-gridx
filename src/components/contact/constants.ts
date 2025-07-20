import { Mail, Phone, MapPin } from "lucide-react";

export const contactItems = [
  {
    Icon: Phone,
    label: "Phone",
    description: "Real humans behind the phones",
    value: "(832) 479-9846",
    href: "tel:8324799846",
  },
  {
    Icon: Mail,
    label: "Email",
    description: "Reach us anytime at:",
    value: "info@nationalgridx.com",
    href: "mailto:info@nationalgridx.com",
  },
  {
    Icon: MapPin,
    label: "Office",
    description: "7005 Chase Oaks Blvd, Plano TX 75025",
    value: "Get Directions ›",
    href: "https://maps.google.com/?q=7005+Chase+Oaks+Blvd,+Plano+TX+75025",
  },
];
