import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "AL FALAK Industrial Equipment Trading LLC | UAE",
  description:
    "ISO 9001:2015 certified supplier for Pneumatic, Hydraulic, Electrical, and Mechanical equipment in UAE, Middle East, Central Asia and East Africa.",
};

export default function RootPage() {
  redirect("/en");
}
