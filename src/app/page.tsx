import { ConferenceOverview } from "@/_components/ConferenceOverview";
import  Hero  from "@/_components/Hero";
import Motivation from "@/_components/Motivation";
import Notices from "@/_components/Notices";
import Sponsors from "@/_components/Sponsors";
import SubHero from "@/_components/SubHero";
import { VenueAndLocation } from "@/_components/VenueAndLocation";

export default function Home() {
  return (
    <>
    <Hero />
    <SubHero />
    <ConferenceOverview />
    <Motivation />
    <Notices />
    <VenueAndLocation />
    <Sponsors />
    </>
  );
}
